import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex flex-col justify-center items-center w-[1080px] h-[450px]" style={{ backgroundColor: "rgba(21, 21, 21, 0.6)" }}>
                        <h1 className="mb-5 text-5xl font-bold text-white font-[Cinzel] uppercase">{title}</h1>
                        <p className="mb-5 text-white font-[Cinzel] uppercase">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;