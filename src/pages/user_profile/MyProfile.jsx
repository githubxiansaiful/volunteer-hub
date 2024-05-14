import { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../firebase/FirebaseProvider";

const MyProfile = () => {

    const { userCurrent, loader } = useContext(AuthContext);

    if (loader) {
        return <div className="container">
            <div className="text-center flex justify-center items-center">
                <span className="loading loading-dots loading-lg "></span>
            </div>
        </div>
    }

    if (userCurrent) {

        return (
            <div className="my-20">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Profile | Volunteer Hub</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div className="container">
                    <div className=" rounded-2xl p-10 mx-auto max-w-[500px] shadow-xl">
                        <div>
                            <h2 className="text-center text-2xl dark:text-white">Hi {userCurrent.displayName}, welcome back!</h2>
                        </div>
                        <div className="max-w-[190px] h-[190px] overflow-hidden mx-auto rounded-full flex justify-center items-center mt-5 my-image-profile">
                            <img src={userCurrent.photoURL} />
                        </div>
                        <div className="text-center mt-5 dark:text-white">
                            <p>Name: {userCurrent.displayName}</p>
                            <p>Email: {userCurrent.email}</p>
                            <Link to="/edit-profile" className="btn btn-primary mt-5">Edit Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MyProfile;