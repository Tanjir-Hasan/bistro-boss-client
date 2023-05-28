import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useCart } from '../../../hooks/useCart';
import { BsFillTrash3Fill } from 'react-icons/bs';
import Swal from 'sweetalert2';

const MyCart = () => {

    const [cart, refetch] = useCart();

    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-10/12 mx-auto'>
            <Helmet>
                <title>Bistro Boss | My cart</title>
            </Helmet>
            <div className="uppercase flex justify-evenly items-center">
                <h3 className="text-2xl font-medium">Total items: {cart.length}</h3>
                <h3 className="text-2xl font-medium">Total price: ${total}</h3>
                <button className='btn bg-[#D1A054] text-white border-none'>Pay</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th className='text-end'>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td className='text-end'>$ {item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost text-white bg-red-600"><BsFillTrash3Fill /></button>
                                </th>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;