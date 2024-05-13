import { Outlet } from "react-router-dom";
import Header from "../main_layout/Header";
import Footer from "../main_layout/Footer";
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;