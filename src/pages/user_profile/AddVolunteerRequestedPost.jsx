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
                                <label>Post Title</label>
                                <input required type="text" name="post_title" />
                            </div>
                            <div>
                                <label>Thumbnail URL</label>
                                <input required type="text" name="thumbnail" />
                            </div>
                            <div className='mb-3'>
                                <label>Category</label>
                                <select name="category" id="" className='w-full border px-[15px] rounded-sm py-[10px]'>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Education">Education</option>
                                    <option value="Social Service">Social Service</option>
                                    <option value="Animal Welfare">Animal Welfare</option>
                                </select>
                            </div>
                            <div>
                                <label>Deadline</label>
                                <div className='w-full'>
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div>
                                <label>Volunteers Needed</label>
                                <input required type="text" name="volunteers_needed" />
                            </div>
                            <div>
                                <label>Location</label>
                                <input required type="text" name="location" />
                            </div>
                            <div>
                                <label>Description</label>
                                <textarea required className="w-full border py-[10px] px-[15px]" name="description" rows="3" ></textarea>
                            </div>
                            <div>
                                <label>Your Email</label>
                                <input type="email" defaultValue={userCurrent.email} disabled name="email" />
                            </div>
                            <div>
                                <label>Your Name</label>
                                <input type="text" defaultValue={userCurrent.displayName} disabled name="displayName" />
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