import React from 'react';

const Loader = () => {
    return (
        <>
            <div className='h-[100vh] flex justify-center items-center'>
                <div className="loader text-center">
                    <span className="loading loading-dots loading-lg"></span>
                </div>
            </div>
        </>
    );
};

export default Loader;