import { useContext, useState } from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/FirebaseProvider";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const VolunteerDetails = () => {
    const { userCurrent } = useContext(AuthContext);
    const navigation = useNavigate();

    const post = useLoaderData();
    const { _id, post_title, thumbnail, category, deadline, volunteers_needed, location, description } = post || {};

    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
        document.body.classList.toggle('active-modal', !modal);
    };

    const handleForm = async (event) => {
        event.preventDefault();
        const form = event.target;

        const postId = _id;
        const post_title = form.post_title.value;
        const thumbnail = form.thumbnail.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const volunteers_needed = form.volunteers_needed.value;
        const location = form.location.value;
        const description = form.description.value;
        const email = form.email.value;
        const displayName = form.displayName.value;
        const suggestion = form.suggestion.value;
        const status = 'Pending';

        const allData = {
            postId,
            post_title,
            thumbnail,
            category,
            deadline,
            volunteers_needed,
            location,
            description,
            email,
            displayName,
            suggestion,
            status,
        };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/application`, allData);
            console.log(data);
            if (data?.insertedId) {
                toast('✅ Request Submitted, Thanks');
                navigation('/volunteer-requested-post');
                handleModal(); // Close modal and remove 'active-modal' class from body
            }
        }
        catch (error) {
            console.log(error);
        }
    };






    return (
        <div className="mt-10 mb-10">
            <div className="container">
                <div className="">
                    <div className="border col-span-2 rounded-lg p-5 max-w-[850px] mx-auto">
                        <div className="mb-5">
                            <img className="w-full" src={thumbnail} alt="" />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5 border-b pb-5">
                            <p className="bg-[#f1f1f1] dark:text-white dark:bg-[#f1f1f10a] rounded-lg p-2 text-base lg:text-xl"><i className="fa-solid fa-tag"></i> {category}</p>
                            <p className="bg-[#f1f1f1] dark:text-white dark:bg-[#f1f1f10a] rounded-lg p-2 text-base lg:text-xl"><i className="fa-solid fa-clock"></i> {new Date(deadline).toLocaleDateString()}</p>
                            <p className="bg-[#f1f1f1] dark:text-white dark:bg-[#f1f1f10a] rounded-lg p-2 text-base lg:text-xl"><i className="fa-solid fa-users"></i> Need: {volunteers_needed}</p>
                        </div>
                        <div className="mb-5 border-b pb-5">
                            <h1 className="font-semibold text-2xl lg:text-3xl dark:text-white">{post_title}</h1>
                            <p className="text-base lg:text-xl dark:text-white">{description}</p>
                        </div>
                        <div className="mb-5">
                            <p className="bg-[#f1f1f1] dark:bg-[#f1f1f10a] dark:text-white rounded-lg py-3 px-5 text-base lg:text-xl"><i className="fa-solid fa-location-dot"></i> {location}</p>
                        </div>
                        <div className="bg-[#171b2a] rounded-lg">
                            <div className="space-y-5 py-10 lg:py-20 px-10 text-white text-center">
                                <h2 className="text-3xl lg:text-4xl font-bold">Join Us & Be A Part Of Something Meaningful.</h2>
                                <p className="text-base lg:text-xl">At our core, we believe in the power of collective action to drive positive change. When individuals come together with a shared purpose, incredible things can happen. That's why we invite you to join our community and become a vital part of something truly meaningful.</p>
                                <button onClick={handleModal} className="btn btn-primary w-full hover-effect">Be A Volunteer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                modal && <div className="modal-popup">
                    <div className="modal-content dark:bg-[#171B2A]">
                        <button onClick={handleModal} className="modal-close dark:text-white"><i className="fa-solid fa-circle-xmark"></i></button>
                        <div className="border-b pb-5 mb-5">
                            <h2 className="text-center text-xl font-semibold dark:text-white">Be A Volunteer</h2>
                        </div>
                        <div>
                            <form onSubmit={handleForm} className="login-form">
                                <div>
                                    <label className="dark:text-white">Post Title</label>
                                    <input type="text" name="post_title" defaultValue={post_title} disabled />
                                </div>
                                <div>
                                    <label className="dark:text-white">Thumbnail URL</label>
                                    <input type="text" name="thumbnail" defaultValue={thumbnail} disabled />
                                </div>
                                <div>
                                    <label className="dark:text-white">Category</label>
                                    <input type="text" name="category" defaultValue={category} disabled />
                                </div>
                                <div>
                                    <label className="dark:text-white">Deadline</label>
                                    <input type="text" name="deadline" defaultValue={deadline} disabled />
                                </div>
                                <div>
                                    <label className="dark:text-white">Volunteers Needed</label>
                                    <input type="text" name="volunteers_needed" defaultValue={volunteers_needed} disabled />
                                </div>
                                <div>
                                    <label className="dark:text-white">Location</label>
                                    <input type="text" name="location" defaultValue={location} disabled />
                                </div>
                                <div>
                                    <label className="dark:text-white">Description</label>
                                    <textarea className="w-full border py-[10px] px-[15px]" name="description" rows="3" defaultValue={description} disabled></textarea>
                                </div>
                                <div>
                                    <label className="dark:text-white">Your Email</label>
                                    <input type="email" name="email" defaultValue={userCurrent.email} disabled />
                                </div>
                                <div>
                                    <label className="dark:text-white">Your Name</label>
                                    <input type="text" name="displayName" defaultValue={userCurrent.displayName} disabled />
                                </div>
                                <div>
                                    <label className="dark:text-white">Suggestion</label>
                                    <input type="text" required name="suggestion" placeholder="have any better idea for us?" />
                                </div>
                                <div>
                                    <button className="btn btn-primary w-full hover-effect">Submit Application</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Toaster />
                </div>
            }
        </div >
    );
};

export default VolunteerDetails;
