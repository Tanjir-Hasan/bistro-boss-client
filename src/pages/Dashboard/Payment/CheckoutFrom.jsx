import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import './CheckoutFrom.css'

const CheckoutFrom = ({ price, cart }) => {

    const stripe = useStripe();
    const elements = useElements();

    const [axiosSecure] = useAxiosSecure();

    const { user } = useContext(AuthContext);

    const [cardError, setCardError] = useState('');

    const [clientSecret, setClientSecret] = useState("");

    const [processing, setProcessing] = useState(false);

    const [trxId, setTrxId] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            console.log("error", error)
            setCardError(error.message)
        }
        else {
            setCardError('');
            // console.log("paymentMethod", paymentMethod)
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown',
                        name: user?.displayName || 'Anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }

        console.log(paymentIntent);

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTrxId(paymentIntent.id);
            // const trxId = paymentIntent.id;
            // save to the server
            const payment = {
                email: user?.email,
                trxId: paymentIntent.id, price,
                price,
                date: new Date(),
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                status: 'service pending',
                itemsName: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.result.insertedId) {
                        // 
                    }
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-outline btn-primary' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p>{cardError}</p>}
            {trxId && <p>Transaction completed with {trxId}</p>}
        </>
    );
};

export default CheckoutFrom;