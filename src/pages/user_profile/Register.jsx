import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../firebase/FirebaseProvider";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');

    const { createUsers, googleLogin, githubLogin, facebookLogin, updateUserProfile } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const location = useLocation();
    const fromProfile = location?.state || "/my-profile";
    const handleSocialRegister = socialProvider => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    navigate(fromProfile);
                }
            })
    }

    const onSubmit = (data) => {
        const { email, password, FullName, image } = data;

        // Regular expressions for password validation
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;

        if (password.length < 6) {
            setRegisterError('Password must be 6 characters or longer');
            return;
        } else if (!uppercaseRegex.test(password)) {
            setRegisterError('Password must contain at least one uppercase letter');
            return;
        } else if (!lowercaseRegex.test(password)) {
            setRegisterError('Password must contain at least one lowercase letter');
            return;
        }

        // Error reset
        setRegisterError('');
        setRegisterSuccess('');

        createUsers(email, password).then(() => {
            setRegisterSuccess('Account Created Successfully!');
            updateUserProfile(FullName, image).then(() => {
                navigate(fromProfile);
            });
        })
            .catch(error => {
                console.log('Already used email', error);
                setRegisterError(error.message);
            });
    }


    const [showPass, setShowPass] = useState(false);

    return (
        <div className="mt-[100px] mb-[100px] max-w-[350px] mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login | Volunteer Hub</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container">
                <div>
                    <h3 className="text-center title-text mb-[25px] dark:text-white">Register</h3>
                    <div className="text-center space-x-3 mb-5">
                        <button onClick={() => handleSocialRegister(googleLogin)} className="social-login dark:border-[#f1f1f124]"><img src="https://auth.hostinger.com/assets/images/oauth/google.svg" /></button>
                        <button onClick={() => handleSocialRegister(facebookLogin)} className="social-login dark:border-[#f1f1f124] bg-[#1877f2]"><img src="https://auth.hostinger.com/assets/images/oauth/facebook.svg" /></button>
                        <button onClick={() => handleSocialRegister(githubLogin)} className="social-login dark:border-[#f1f1f124] bg-[#2f363d]"><img src="https://auth.hostinger.com/assets/images/oauth/github.svg" /></button>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider dark:text-white">OR</div>
                    </div>
                    <div className="mt-5 login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input className="dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a]" type="text" placeholder="Full Name" {...register("FullName", { required: true })} />
                            </div>
                            <div>
                                <input className="dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a]" type="email" placeholder="Email" {...register("email", { required: true })} />
                            </div>
                            <div>
                                <input className="dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a]" type="url" placeholder="photoURL" {...register("image", { required: true })} />
                            </div>
                            <div className="relative">
                                <input className="dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a]" type={showPass ? "text" : "password"} placeholder="Password" {...register("password", { required: true })} />
                                <p onClick={() => setShowPass(!showPass)} className="pass-eyes"><i className="fa-solid fa-eye"></i></p>
                            </div>
                            <div>
                                <button className="btn w-full btn-primary">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <div role="alert" className="alert alert-warning mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>{registerError}</span>
                            </div>
                        }
                        {
                            registerSuccess && <div role="alert" className="alert alert-success mt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{registerSuccess}</span>
                            </div>
                        }
                    </div>
                    <div className="text-center mt-5">
                        <h3 className="dark:text-white">Already have an account? <Link className="underline" to="/login">Log in Now!</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;