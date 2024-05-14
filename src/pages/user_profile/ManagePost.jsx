import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../firebase/FirebaseProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const ManagePost = () => {

    const { userCurrent, loader } = useContext(AuthContext);
    const [posts, setPost] = useState([]);
    const [controlItem, setControlItem] = useState(false);

    useEffect(() => {
        const getData = async () => {
            // const { data } = await axios(`${import.meta.env.VITE_API_URL}/user-posts/${userCurrent.email}`)
            const { data } = await axios(`https://volunteer-management-server-lilac.vercel.app/user-posts/${userCurrent.email}`)
            setPost(data)
        }
        getData()
    }, [userCurrent, controlItem])

    console.log(posts);

    // Delete item
    const handleDeleteItem = (id) => {
        // fetch(`${import.meta.env.VITE_API_URL}/delete-post/${id}`, {
        fetch(`https://volunteer-management-server-lilac.vercel.app/delete-post/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    setControlItem(!controlItem);
                    toast.success("Item Deleted, Thank you");
                } else {
                    toast.error("No items were delete");
                }
                console.log(data);
            })
    }


    return (
        <div>
            <Helmet>
                <title>Manage Post | Volunteer Hub</title>
            </Helmet>
            <div className='bg-[#171B2A] mb-20'>
                <div className="container">
                    <div className='text-center space-y-5 mb-10 py-10 lg:py-[80px] text-white'>
                        <h2 className="text-3xl lg:text-4xl font-bold">Manage Post</h2>
                    </div>
                </div>
            </div>
            <div className="mb-20">
                <div className="container">
                    <div>
                        <div className="mt-[60px] lg:mt-[80px] animate__animated animate__fadeIn">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
                                {/* {
                                    posts && posts.length > 0 ? (
                                        posts.map(post => (
                                            <div key={post._id} className="rounded-xl border p-5">
                                                <div className="mb-4 my-spot-img">
                                                    <img src={post.thumbnail} alt="" />
                                                </div>
                                                <div className="mb-2">
                                                    <h2 className="text-xl font-bold">{post.post_title}</h2>
                                                </div>
                                                <div className="space-y-2">
                                                    <p><i className="fa-solid fa-tag"></i> {post.category}</p>
                                                    <p><i className="fa-solid fa-clock"></i> Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
                                                    <p><i className="fa-solid fa-location-dot"></i> {post.location}</p>
                                                    <p><i className="fa-solid fa-users"></i> Apply Seat {post.volunteers_needed}</p>
                                                    <p className="bg-[#f1f1f1] px-3 py-3 rounded-lg"><i className="fa-solid fa-user"></i> Posted by: {post.displayName}</p>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3 mt-3">
                                                    <Link to={`/update-post/${post._id}`}><button className="btn btn-primary w-full"><i className="fa-solid fa-pen-to-square"></i></button></Link>
                                                    <button onClick={() => handleDeleteItem(post._id)} className="btn btn-warning w-full"><i className="fa-solid fa-trash"></i></button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>There are no posts.</p>
                                    )
                                } */}
                                {
                                    // If Firebase loader is active, render it
                                    loader ? (
                                        <div className="loader">Loading...</div>
                                    ) : (
                                        // If loader is not active, render posts or message
                                        posts.length > 0 ? (
                                            // If there are posts, render them
                                            posts.map(post => (
                                                <div key={post._id} className="rounded-xl border p-5">
                                                    <div className="mb-4 my-spot-img">
                                                        <img src={post.thumbnail} alt="" />
                                                    </div>
                                                    <div className="mb-2">
                                                        <h2 className="text-xl font-bold">{post.post_title}</h2>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <p><i className="fa-solid fa-tag"></i> {post.category}</p>
                                                        <p><i className="fa-solid fa-clock"></i> Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
                                                        <p><i className="fa-solid fa-location-dot"></i> {post.location}</p>
                                                        <p><i className="fa-solid fa-users"></i> Apply Seat {post.volunteers_needed}</p>
                                                        <p className="bg-[#f1f1f1] px-3 py-3 rounded-lg"><i className="fa-solid fa-user"></i> Posted by: {post.displayName}</p>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-3 mt-3">
                                                        <Link to={`/update-post/${post._id}`}><button className="btn btn-primary w-full"><i className="fa-solid fa-pen-to-square"></i></button></Link>
                                                        <button onClick={() => handleDeleteItem(post._id)} className="btn btn-warning w-full"><i className="fa-solid fa-trash"></i></button>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            // If there are no posts, render a message
                                            <p>There are no posts.</p>
                                        )
                                    )
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePost;