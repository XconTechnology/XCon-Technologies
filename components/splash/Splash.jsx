import React from 'react';
import { Circles } from 'react-loader-spinner'
import logo from "@/public/assets/img_placeholder/Light Logo.png";
import Image from "next/image";

const Splash = () => {
    return (
        <div className={"h-screen w-screen bg-gray-900 flex flex-col gap-10 justify-center items-center"}>
            <Circles
            height={200}
            width={200}
            radius={5}
            color="#61a00e"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />

            <Image
                src={logo}
                alt="AIMass"
                width="280"
                height="40"
                className="wave-animation"
            />
        </div>
    );
};

export default Splash;