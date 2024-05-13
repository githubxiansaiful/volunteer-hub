const Footer = () => {
    return (
        <div className="bg-[#f1f1f1] dark:bg-[#171b2a] pt-10">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-10">
                    <div>
                        <img className="mb-3 max-w-[170px]" src="/logo.png" />
                        <p className="dark:dark:text-white">Welcome to Volunteer Hub, your central platform for connecting volunteers with meaningful opportunities to make a difference in their communities.</p>
                    </div>
                    <div>
                        <h3 className="dark:dark:text-white font-semibold text-xl mb-5">Quick Links</h3>
                        <ul className="dark:text-white space-y-2">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Our Story</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="dark:text-white font-semibold text-xl mb-5">Support Links</h3>
                        <ul className="dark:text-white space-y-2">
                            <li>FAQ</li>
                            <li>Contact Us</li>
                            <li>Promotional Offers</li>
                            <li>Privacy Policy</li>
                            <li>Refund policy</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="dark:text-white font-semibold text-xl mb-5">Contact Info</h3>
                        <ul className="dark:text-white space-y-2">
                            <li>+1 123456789</li>
                            <li>info@volunteerhub.com</li>
                            <li>help@volunteerhub.com</li>
                            <li>donate@volunteerhub.com</li>
                            <li>6016 Nunn St, Houston Texas, United States</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center border-t border-[#ddd] pt-5 pb-5 dark:text-white">
                    <p>Copyright © 2024 Volunteer Hub | All Rights Reserved </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;