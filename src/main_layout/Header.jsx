import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseProvider";

const Header = () => {
    const { userCurrent, logOutUser } = useContext(AuthContext);

    const setDarkMode = () => {
        document.querySelector("html").setAttribute("data-theme", "dark");
    }
    const setLightMode = () => {
        document.querySelector("html").setAttribute("data-theme", "light");
    }

    const toggleTheme = (event) => {
        if (event.target.checked) setDarkMode();
        else setLightMode()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/volunteer">Need Volunteer</NavLink></li>
        <li><NavLink to="/about-us">About Us</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
    </>

    return (
        <>
            <div className="bg-[#171b2a] text-white py-3">
                <div className="container">
                    {/* Top Bar */}
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            <p className="hover-effect"><i className="fa-solid fa-phone"></i> +1 123456789</p>
                            <p className="hover-effect top-email"><i className="fa-solid fa-envelope"></i> info@valunteerhub.com</p>
                            <div className="flex space-x-4 social-icons">
                                <p className="hover-effect"><i className="fa-brands fa-facebook"></i></p>
                                <p className="hover-effect"><i className="fa-brands fa-instagram"></i></p>
                                <p className="hover-effect"><i className="fa-brands fa-tiktok"></i></p>
                                <p className="hover-effect"><i className="fa-brands fa-youtube"></i></p>
                            </div>
                        </div>
                        <div className="">
                            <label className="cursor-pointer grid place-items-center">
                                <input onChange={toggleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                                <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-[#e4e5e7] z-10 relative">
                <div className="container">
                    <div>
                        <div className="">
                            <div className="navbar bg-base-100 pl-0 pr-0">
                                <div className="navbar-start">
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                        </div>
                                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  text-base">
                                            {navLinks}
                                        </ul>
                                    </div>
                                    <Link to="/" className="main-logo"><img src="/logo.png" /></Link>
                                </div>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1  text-base">
                                        {navLinks}
                                    </ul>
                                </div>
                                <div className="navbar-end">
                                    {
                                        userCurrent ? <>

                                            <div className="dropdown dropdown-end">
                                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        <img title={userCurrent?.displayName} src={userCurrent?.photoURL || "https://i.ibb.co/hHDqnJ4/male-placeholder-image.jpg"} />
                                                    </div>
                                                </div>
                                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
                                                    <li> <Link to="/my-profile">My Profile</Link></li>
                                                    <li> <Link to="/add-volunteer-post">Add Volunteer Post</Link></li>
                                                    <li> <Link to="/manage-post">Manage My Post</Link></li>
                                                    <li> <Link to="/volunteer-requested-post">My Volunteer Requested Post</Link></li>
                                                    <li><button onClick={logOutUser}>Log Out</button></li>
                                                </ul>
                                            </div>
                                        </>
                                            :
                                            <>
                                                <Link to="/login" className="btn">Login</Link>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;