import React from 'react';

const Loader = () => {
    return (
        <>
            <div className='pt-20 pb-20'>
                <div className="container">
                    <div className="loader text-center">
                        <span className="loading loading-dots loading-lg"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loader;