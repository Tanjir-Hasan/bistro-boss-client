import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import PopularItems from '../PopularItems/PopularItems';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Collection></Collection>
            <PopularItems></PopularItems>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;