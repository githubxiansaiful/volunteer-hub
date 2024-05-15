import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../firebase/FirebaseProvider";

const Login = () => {

    const { loginUser, googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)
    const from = location?.state || "/my-profile";
    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            })
    }

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(result => {
                // console.log(result);
                navigate(from);
            })
            .catch(error => {
                // console.log('Wrong Email and Pass', error);
                setLoginError('invalid email and password');
            });
    }

    return (
        <div className="mt-[100px] mb-[100px] max-w-[350px] mx-auto">
            <Helmet>
                <title>Login | Volunteer Hub</title>
            </Helmet>
            <div className="container">
                <div>
                    <h3 className="text-center title-text mb-[25px] dark:text-white">Log in</h3>
                    <div className="text-center space-x-3 mb-5">
                        <button onClick={() => handleSocialLogin(googleLogin)} className="social-login dark:border-[#f1f1f124]"><img src="https://auth.hostinger.com/assets/images/oauth/google.svg" /></button>
                        {/* <button onClick={() => handleSocialLogin(facebookLogin)} className="social-login dark:border-[#f1f1f124] bg-[#1877f2]"><img src="https://auth.hostinger.com/assets/images/oauth/facebook.svg" /></button> */}
                        <button onClick={() => handleSocialLogin(githubLogin)} className="social-login dark:border-[#f1f1f124] bg-[#2f363d]"><img src="https://auth.hostinger.com/assets/images/oauth/github.svg" /></button>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider dark:text-white">OR</div>
                    </div>
                    <div className="mt-5 login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input type="email" className="dark:bg-[#f1f1f10a] dark:text-white dark:border-[#f1f1f10a]" placeholder="Email" {...register("email", { required: true })} />
                            </div>
                            <div className="relative">
                                <input className="dark:bg-[#f1f1f10a] dark:text-white dark:border-[#f1f1f10a]" type={showPassword ? "text" : "password"} placeholder="Password" {...register("password", { required: true })} />
                                <p onClick={() => setShowPassword(!showPassword)} className="pass-eyes"><i className="fa-solid fa-eye"></i></p>
                            </div>
                            <div>
                                <button className="btn w-full btn-primary">Log in</button>
                            </div>
                        </form>
                        {
                            loginError && <div role="alert" className="alert alert-warning mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>{loginError}</span>
                        </div>
                        }
                    </div>
                    <div className="text-center mt-5">
                        <h3 className="dark:text-white">Do not have an account? <Link className="underline" to="/register">Register Now!</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;