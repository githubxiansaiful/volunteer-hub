import { Helmet } from "react-helmet";
import HowToJoin from "./components/HowToJoin";
import JoinUs from "./components/JoinUs";
import NeedVolunteer from "./components/NeedVolunteer";
import Slider from "./components/Slider";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount


    return (
        <div>
            <Helmet>
                <title>Home | Volunteer Hub</title>
            </Helmet>
            {isLoading ? <Loader /> : (
                <>
                    <Slider />
                    <NeedVolunteer />
                    <JoinUs />
                    <HowToJoin />
                </>
            )}
        </div>
    );
};

export default Home;
