import { Outlet } from "react-router-dom";
import Header from "../main_layout/Header";
import Footer from "../main_layout/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Loader from "../pages/home/components/Loader";


const Main = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount


    return (
        <div>
            {isLoading ? <Loader /> : (
                <>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                    <Toaster></Toaster>
                </>
            )}
        </div>
    );
};

export default Main;