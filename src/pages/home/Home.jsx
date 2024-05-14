import { Helmet } from "react-helmet";
import HowToJoin from "./components/HowToJoin";
import JoinUs from "./components/JoinUs";
import NeedVolunteer from "./components/NeedVolunteer";
import Slider from "./components/Slider";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home | Volunteer Hub</title>
            </Helmet>

            <Slider />
            <NeedVolunteer />
            <JoinUs />
            <HowToJoin />

        </div>
    );
};

export default Home;
