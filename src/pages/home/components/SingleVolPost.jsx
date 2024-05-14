import { Link } from "react-router-dom";

const SingleVolPost = ({ volItem }) => {

    const { thumbnail, post_title, category, deadline, _id } = volItem;

    return (
        <div className="singleVolPost home-posts overflow-hidden rounded-lg p-5 border dark:border-[#f1f1f126] hover-effect">
            <div className="mb-3 post-thumbnail">
                <img src={thumbnail} />
            </div>
            <div className="mb-3">
                <h2 className="font-semibold dark:text-white text-xl">{window.innerWidth > 768 ? (post_title.length > 22 ? post_title.slice(0, 22) + '...' : post_title) : post_title}</h2>
            </div>
            <div className="flex justify-center items-center space-x-2 mb-3">
                <p className="bg-[#f1f1f1] dark:bg-[#f1f1f10a] dark:text-white w-full py-2 px-2 rounded-lg tooltip" data-tip="Volunteer Category"><i className="fa-solid fa-tag"></i> {category}</p>
                <p className="bg-[#f1f1f1] dark:bg-[#f1f1f10a] dark:text-white w-full py-2 px-2 rounded-lg tooltip" data-tip="Apply Last Date"><i className="fa-solid fa-clock"></i> {new Date(deadline).toLocaleDateString()}</p>
            </div>
            <div>
                <Link to={`/volunteer-details/${_id}`} className="btn btn-neutral w-full">Learn More</Link>
            </div>
        </div>
    );
};

export default SingleVolPost;