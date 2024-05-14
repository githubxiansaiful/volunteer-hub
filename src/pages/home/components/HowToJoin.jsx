import React from 'react';

const HowToJoin = () => {
    return (
        <div className="mb-[80px]">
            <div className='container'>
                <div className='text-center space-y-5 mb-10'>
                    <h2 className="text-3xl dark:text-white lg:text-4xl font-bold">How To Join?</h2>
                    <p className="text-base lg:text-xl dark:text-white max-w-[600px] m-auto">Joining our community is simple and straightforward. Just follow these easy steps to become a part of our mission to make a difference</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-white'>
                    <div className='space-y-3 hover-effect bg-[#171B2A] p-5 lg:p-10 rounded-lg'>
                        <div className='bg-[#fff] rounded-lg w-[60px] h-[60px] flex justify-center items-center'>
                            <i className="fa-solid fa-handshake-angle text-3xl text-[#171B2A]"></i>
                        </div>
                        <h3 className='font-bold text-xl'>Explore Opportunities</h3>
                        <p>Discover a wide range of volunteer opportunities tailored to your interests, skills, and availability. Browse through our diverse projects and find the perfect fit for you.</p>
                    </div>
                    <div className='space-y-3 hover-effect bg-[#171B2A] p-5 lg:p-10 rounded-lg'>
                        <div className='bg-[#fff] rounded-lg w-[60px] h-[60px] flex justify-center items-center'>
                            <i className="fa-solid fa-face-smile text-3xl text-[#171B2A]"></i>
                        </div>
                        <h3 className='font-bold text-xl'>Get Involved</h3>
                        <p>Take the first step towards making a difference by getting involved in our community. Whether it's attending events, joining committees, or participating in campaigns, there are plenty of ways to contribute.</p>
                    </div>
                    <div className='space-y-3 hover-effect bg-[#171B2A] p-5 lg:p-10 rounded-lg'>
                        <div className='bg-[#fff] rounded-lg w-[60px] h-[60px] flex justify-center items-center'>
                            <i className="fa-solid fa-right-to-bracket text-3xl text-[#171B2A]"></i>
                        </div>
                        <h3 className='font-bold text-xl'>Sign Up Today</h3>
                        <p>Ready to take action? Sign up today to become a member of our community. Registration is quick, easy, and free. Start your journey towards creating positive change now.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToJoin;