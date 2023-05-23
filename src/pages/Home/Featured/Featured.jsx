import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import feimg from '../../../assets/home/featured.jpg';
import "./Featured.css";

const Featured = () => {
    return (
        <div className='featured-img py-16 text-white bg-fixed'>
            <SectionTitle
                subHeading="---Check it out---"
                heading="FROM OUR MENU"
            ></SectionTitle>
            <div className='md:flex justify-center items-center py-8 px-16'>
                <div>
                    <img src={feimg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Date</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque in placeat sunt rerum, praesentium repudiandae delectus nemo explicabo dignissimos reprehenderit corrupti magni laborum doloremque officia sapiente eligendi doloribus ut, beatae excepturi, accusamus laudantium distinctio quis adipisci! Quam quos voluptatibus exercitationem fugiat eaque? In ipsam temporibus velit rerum nisi, optio quibusdam?</p>
                    <button className="btn btn-outline btn-primary">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;