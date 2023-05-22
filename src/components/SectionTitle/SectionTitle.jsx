import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='w-3/12 mx-auto text-center my-14'>
            <p className='text-[#D99904] mb-4'>{subHeading}</p>
            <p className='text-3xl border-y-4 py-5 uppercase'>{heading}</p>
        </div>
    );
};

export default SectionTitle;