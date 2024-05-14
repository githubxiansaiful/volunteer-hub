import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../firebase/FirebaseProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdatePost = () => {

    const { userCurrent } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();


    const { id } = useParams();
    const [currentPost, setCurrentPost] = useState({});

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/post/${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentPost(data);
                console.log('SingleSpot', data);
            })
    }, [id]);




    const handleAddPost = async (event) => {
        event.preventDefault();
        const form = event.target;


        const post_title = form.post_title.value;
        const thumbnail = form.thumbnail.value;
        const category = form.category.value;
        const deadline = startDate;
        const volunteers_needed = form.volunteers_needed.value;
        const location = form.location.value;
        const description = form.description.value;
        const email = form.email.value;
        const displayName = form.displayName.value;

        const allAddedData = {
            post_title,
            thumbnail,
            category,
            deadline,
            volunteers_needed,
            location,
            description,
            email,
            displayName,
        };

       
        fetch(`${import.meta.env.VITE_API_URL}/update-post/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(allAddedData),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    toast.success("Item Updated, Thank you");
                } else {
                    toast.error("No items were updated");
                }
                console.log(data);
            })
    };



    return (
        <div>
            <Helmet>
                <title>Update Post | Volunteer Hub</title>
            </Helmet>
            <div className='bg-[#171B2A] mb-20'>
                <div className="container">
                    <div className='text-center space-y-5 mb-10 py-10 lg:py-[80px] text-white'>
                        <h2 className="text-3xl lg:text-4xl font-bold">Update Post</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='mb-20'>
                    <div>
                        <form onSubmit={handleAddPost} className="login-form">
                            <div>
                                <label className='dark:text-white'>Post Title</label>
                                <input required defaultValue={currentPost.post_title} type="text" name="post_title" className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' />
                            </div>
                            <div>
                                <label className='dark:text-white'>Thumbnail URL</label>
                                <input required defaultValue={currentPost.thumbnail} type="text" name="thumbnail" className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' />
                            </div>
                            <div className='mb-3'>
                                <label className='dark:text-white'>Category</label>
                                <select name="category" id="" className='w-full border px-[15px] rounded-sm py-[10px] dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white'>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Education">Education</option>
                                    <option value="Social Service">Social Service</option>
                                    <option value="Animal Welfare">Animal Welfare</option>
                                </select>
                            </div>
                            <div>
                                <label className='dark:text-white'>Deadline</label>
                                <div className='w-full'>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' />
                                </div>
                            </div>
                            <div>
                                <label className='dark:text-white'>Volunteers Needed</label>
                                <input required defaultValue={currentPost.volunteers_needed} type="text" name="volunteers_needed" className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' />
                            </div>
                            <div>
                                <label className='dark:text-white'>Location</label>
                                <input required defaultValue={currentPost.location} className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' type="text" name="location" />
                            </div>
                            <div>
                                <label className='dark:text-white'>Description</label>
                                <textarea required defaultValue={currentPost.description} className="dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white w-full border py-[10px] px-[15px]" name="description" rows="3" ></textarea>
                            </div>
                            <div>
                                <label className='dark:text-white'>Your Email</label>
                                <input type="email" defaultValue={userCurrent.email} disabled name="email" className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' />
                            </div>
                            <div>
                                <label className='dark:text-white'>Your Name</label>
                                <input type="text" defaultValue={userCurrent.displayName} disabled name="displayName" className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' />
                            </div>
                            <div>
                                <button className="btn btn-primary w-full hover-effect">Submit Application</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdatePost;