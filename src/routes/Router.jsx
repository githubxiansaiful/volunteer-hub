import { createBrowserRouter } from "react-router-dom";
import Main from "../main_layout/Main";
import Home from "../pages/home/Home";
import Error from "../main_layout/Error";
import Volunteer from "../pages/volunteer/Volunteer";
import Login from "../pages/user_profile/Login";
import Register from "../pages/user_profile/Register";
import MyProfile from "../pages/user_profile/MyProfile";
import EditProfile from "../pages/user_profile/EditProfile";
import PrivateRoute from "../routes/PrivateRoute";
import Contact from "../pages/contact/Contact";
import ManagePost from "../pages/user_profile/ManagePost";
import VolunteerRequestedPost from "../pages/user_profile/VolunteerRequestedPost";
import AddVolunteerRequestedPost from "../pages/user_profile/AddVolunteerRequestedPost";
import VolunteerDetails from "../pages/volunteer/VolunteerDetails";
import UpdatePost from "../pages/user_profile/UpdatePost";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('/public/fakedata.json')
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/posts`)
            },
            {
                path: '/volunteer',
                element: <Volunteer></Volunteer>,
                // loader: () => fetch('/public/fakedata.json')
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/posts`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/my-profile',
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: '/add-volunteer-post',
                element: <PrivateRoute> <AddVolunteerRequestedPost></AddVolunteerRequestedPost></PrivateRoute>
            },
            {
                path: '/manage-post',
                element: <PrivateRoute> <ManagePost></ManagePost></PrivateRoute>
            },
            {
                path: '/volunteer-requested-post',
                element: <PrivateRoute> <VolunteerRequestedPost></VolunteerRequestedPost></PrivateRoute>
            },
            {
                path: '/volunteer-details/:id',
                element: <PrivateRoute><VolunteerDetails></VolunteerDetails></PrivateRoute>,
                // loader: () => fetch('/public/fakedata.json')
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/post/${params.id}`)
            },
            {
                path: '/update-post/:id',
                element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>
            },
            {
                path: '/edit-profile',
                element: <PrivateRoute> <EditProfile></EditProfile> </PrivateRoute>
            },
            {
                path: '/contact-us',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router;