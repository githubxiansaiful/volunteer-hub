import { Link } from "react-router-dom";

const JoinUs = () => {
    return (
        <div className="mb-[80px]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-[#171b2a] rounded-[16px] overflow-hidden">
                    <div className="space-y-5 py-10 lg:py-20 px-10 text-white">
                        <h2 className="text-3xl lg:text-4xl font-bold">Join Us & Be A Part Of Something Meaningful.</h2>
                        <p className="text-base lg:text-xl">At our core, we believe in the power of collective action to drive positive change. When individuals come together with a shared purpose, incredible things can happen. That's why we invite you to join our community and become a vital part of something truly meaningful.</p>
                        <Link to='/contact-us' className="btn btn-primary w-36">Contact Us</Link>
                    </div>
                    <div className="join-bg-col">
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;