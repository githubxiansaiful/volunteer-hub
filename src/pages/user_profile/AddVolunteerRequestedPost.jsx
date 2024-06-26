import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../firebase/FirebaseProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddVolunteerRequestedPost = () => {

    const { userCurrent } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const navigate = useNavigate();


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

        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/post`,
                allAddedData
            )
            console.log(data);
            if (data?.insertedId) {
                toast.success('A new post added successfully, Thanks')
                navigate('/manage-post');
            }
        }
        catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <Helmet>
                <title>Add New Post | Volunteer Hub</title>
            </Helmet>
            <div className='bg-[#171B2A] mb-20'>
                <div className="container">
                    <div className='text-center space-y-5 mb-10 py-10 lg:py-[80px] text-white'>
                        <h2 className="text-3xl lg:text-4xl font-bold">Add A New Post</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='mb-20'>
                    <div>
                        <form onSubmit={handleAddPost} className="login-form">
                            <div>
                                <label className='dark:text-white'>Post Title</label>
                                <input required type="text" name="post_title" className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' />
                            </div>
                            <div>
                                <label className='dark:text-white'>Thumbnail URL</label>
                                <input required type="text" className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' name="thumbnail" />
                            </div>
                            <div className='mb-3'>
                                <label className='dark:text-white'>Category</label>
                                <select name="category" id="" className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white w-full border px-[15px] rounded-sm py-[10px]'>
                                    <option className='dark:bg-[#171B2A] dark:text-white' value="Healthcare">Healthcare</option>
                                    <option className='dark:bg-[#171B2A] dark:text-white' value="Education">Education</option>
                                    <option className='dark:bg-[#171B2A] dark:text-white' value="Social Service">Social Service</option>
                                    <option className='dark:bg-[#171B2A] dark:text-white' value="Animal Welfare">Animal Welfare</option>
                                </select>
                            </div>
                            <div>
                                <label className='dark:text-white'>Deadline</label>
                                <div className='w-full'>
                                    <DatePicker className='dark:bg-[#f1f1f10a] dark:text-white dark:border-[#f1f1f10a]' selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div>
                                <label className='dark:text-white'>Volunteers Needed</label>
                                <input required type="text" name="volunteers_needed" className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' />
                            </div>
                            <div>
                                <label className='dark:text-white'>Location</label>
                                <input required type="text" name="location" className='dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white' />
                            </div>
                            <div>
                                <label className='dark:text-white'>Description</label>
                                <textarea required className="w-full border rounded dark:bg-[#f1f1f10a] dark:border-[#f1f1f10a] dark:text-white py-[10px] px-[15px]" name="description" rows="3" ></textarea>
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

export default AddVolunteerRequestedPost;