import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseProvider";

const PrivateRoute = ({children}) => {

    const { userCurrent, loader } = useContext(AuthContext);
    const location = useLocation();

    console.log(location.pathname);

    if(loader) {
        return <div className="container">
            <div className="text-center flex justify-center items-center pt-20 pb-20">
                <span className="loading loading-dots loading-lg "></span>
            </div>
        </div>
    }

    if (userCurrent) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRoute;