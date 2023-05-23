import React from 'react';

const MenuItem = ({ item }) => {

    const { image, price, recipe, name } = item;

    return (
        <div className='flex space-x-2'>
            <img src={image} alt="" style={{borderRadius: "0px 200px 200px 200px"}} className='w-[118px] h-[104px]' />
            <div>
                <h3 className='text-[#151515] font-[Cinzel] uppercase'>{name} ------------------</h3>
                <p className='text-[#737373] font-[Inter]'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>{price}</p>
        </div>
    );
};

export default MenuItem;