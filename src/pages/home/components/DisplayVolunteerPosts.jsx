import { useLoaderData } from "react-router-dom";
import SingleVolPost from "./SingleVolPost";

const DisplayVolunteerPosts = () => {

    const volunteerItems = useLoaderData();
    // console.log(volunteerItems);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    volunteerItems.slice(0, 6).map(volItem => (
                        <SingleVolPost
                            volItem={volItem}
                            key={volItem._id}
                        ></SingleVolPost>
                    ))
                }
            </div>
        </div>
    );
};

export default DisplayVolunteerPosts;