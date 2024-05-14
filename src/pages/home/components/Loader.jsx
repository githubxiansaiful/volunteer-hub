import React from 'react';

const Loader = () => {
    return (
        <>
            <div className='h-[100vh] dark:bg-[#171B2A] flex justify-center items-center'>
                <div className="loader text-center">
                    <span className="loading loading-dots loading-lg dark:text-white"></span>
                </div>
            </div>
        </>
    );
};

export default Loader;