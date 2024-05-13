import { Link } from 'react-router-dom';
import DisplayVolunteerPosts from './DisplayVolunteerPosts';

const NeedVolunteer = () => {
    return (
        <div className='mb-[80px]'>
            <div className="container">
                <div className='text-center space-y-5 mb-10'>
                    <h2 className="text-3xl lg:text-4xl font-bold">Need Volunteers</h2>
                    <p className="text-base lg:text-xl max-w-[600px] m-auto">Join us in our mission to create positive change and make a difference in our community. Explore volunteer opportunities and find the perfect match for your skills, interests, and schedule.</p>
                </div>

                <div>
                    <DisplayVolunteerPosts></DisplayVolunteerPosts>
                </div>

                <div className='text-center mt-5'>
                    <Link to='/volunteer' className='btn btn-primary hover-effect'>View All Items</Link>
                </div>
            </div>
        </div>
    );
};

export default NeedVolunteer;