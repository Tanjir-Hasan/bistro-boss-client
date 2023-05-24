import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularItems = () => {

    const [menu] = useMenu([]);

    const popular = menu.filter(item => item.category === "popular");

    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular");
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <section className='w-9/12 mx-auto mb-12'>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularItems;