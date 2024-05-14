import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../firebase/FirebaseProvider";

const EditProfile = () => {

    const { userCurrent, loader, updateUserProfile } = useContext(AuthContext);

    if (loader) {
        return <div className="container">
            <div className="text-center flex justify-center items-center">
                <span className="loading loading-dots loading-lg "></span>
            </div>
        </div>
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const location = useLocation();
    const fromEdit = location?.state || "/my-profile";

    const onSubmit = (data) => {
        const { FullName, image } = data;
        updateUserProfile(FullName, image).then(() => {
            navigate(fromEdit);
        });
    }

    if (userCurrent) {

        return (
            <div className="my-20">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Edit Profile | Real Estate</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <div className="container">
                    <div className=" rounded-2xl p-10 mx-auto max-w-[500px] shadow-xl">
                        <div>
                            <h2 className="text-center text-2xl dark:text-white">Edit Your Profile Info</h2>
                        </div>
                        <div className="mt-5 login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input type="text" placeholder="Full Name" {...register("FullName", { required: true })} />
                                </div>
                                <div>
                                    <input type="url" placeholder="Photo URL" {...register("image", { required: true })} />
                                </div>
                                <div>
                                    <button className="btn btn-primary w-full">Update Profile</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <Link to="/my-profile" className="btn btn-error w-full mt-2 text-white">Cancel</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default EditProfile;