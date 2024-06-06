import React from 'react';
import Image from "next/image";

const Loading = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Image
                src="/logo.svg"
                alt="logo"
                width={200}
                height={200}
                className="animate-pulse duration-700"
            />

        </div>
    );
};

export default Loading;
