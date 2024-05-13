import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const Volunteer = () => {
    const [isGridView, setIsGridView] = useState(true);
    const toggleView = (isGrid) => {
        setIsGridView(isGrid);
    };

    const allVolunteers = useLoaderData();

    return (
        <div>
            <Helmet>
                <title>All Volunteer Posts | Volunteer Hub</title>
            </Helmet>
            <div className='bg-[#171B2A]'>
                <div className="container">
                    <div className='text-center space-y-5 mb-10 py-10 lg:py-[80px] text-white'>
                        <h2 className="text-3xl lg:text-4xl font-bold">All Posts</h2>
                        <p className="text-base lg:text-xl max-w-[600px] m-auto">
                            <strong>Need Volunteers</strong> Join us in our mission to create positive change and make a difference in our community. Explore volunteer opportunities and find the perfect match for your skills, interests, and schedule.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='container'>
                    <div className="flex justify-between bg-[#f1f1f1] rounded-lg py-3 px-3 mb-10">
                        <div>
                            <p className='text-base lg:text-xl'>Items: {allVolunteers.length}</p>
                        </div>
                        <div className='flex space-x-3'>
                            <p className={`w-5 tooltip cursor-pointer ${isGridView ? 'grid-view-btn' : 'table-view-btn'}`} data-tip={isGridView ? 'Grid View' : 'List View'} onClick={() => toggleView(true)}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grid" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-grid fa-lg"><path fill="currentColor" d="M0 72C0 49.9 17.9 32 40 32H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V72zM0 232c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V232zM128 392v48c0 22.1-17.9 40-40 40H40c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40H88c22.1 0 40 17.9 40 40zM160 72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V72zM288 232v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM160 392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392zM448 72v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V72c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40zM320 232c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V232zM448 392v48c0 22.1-17.9 40-40 40H360c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40z" ></path></svg></p>
                            <p className={`w-[23px] tooltip cursor-pointer ${isGridView ? 'table-view-btn' : 'grid-view-btn'}`} data-tip={isGridView ? 'List View' : 'Grid View'} onClick={() => toggleView(false)}> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list-ul" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-list-ul fa-lg"><path fill="currentColor" d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" ></path></svg></p>
                        </div>
                    </div>
                </div>
                <div className='mb-20'>
                    <div className="container">
                        <div>
                            <div className={isGridView ? 'grid-display block' : 'grid-display hidden'}>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20'>
                                    {allVolunteers.map(singleVol => (
                                        <div key={singleVol._id} className='singleVolPost overflow-hidden rounded-lg p-5 border hover-effect'>
                                            <div className="mb-3 post-thumbnail">
                                                <img src={singleVol.thumbnail} />
                                            </div>
                                            <div className="mb-3">
                                                <h2 className="font-semibold text-xl">{window.innerWidth > 768 ? (singleVol.post_title.length > 22 ? singleVol.post_title.slice(0, 22) + '...' : singleVol.post_title) : singleVol.post_title}</h2>
                                            </div>
                                            <div className="flex justify-center items-center space-x-2 mb-3">
                                                <p className="bg-[#f1f1f1] w-full py-2 px-2 rounded-lg tooltip" data-tip="Volunteer Category"><i className="fa-solid fa-tag"></i> {singleVol.category}</p>
                                                <p className="bg-[#f1f1f1] w-full py-2 px-2 rounded-lg tooltip" data-tip="Apply Last Date"><i className="fa-solid fa-clock"></i> {new Date(singleVol.deadline).toLocaleDateString()}</p>
                                            </div>
                                            <div>
                                                <Link to={`/volunteer-details/${singleVol._id}`} className="btn btn-neutral w-full">Learn More</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={isGridView ? 'table-view-items hidden' : 'table-view-items block'}>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                    {allVolunteers.map(tableVol => (
                                        <div key={tableVol} className='overflow-hidden rounded-lg p-5 border hover-effect'>
                                            <div className='grid grid-cols-2 gap-3 items-center'>
                                                <div>
                                                    <img src={tableVol.thumbnail} alt="" />
                                                </div>
                                                <div>
                                                    <div className="mb-3">
                                                        <h2 className="font-semibold text-xl">{window.innerWidth > 768 ? (tableVol.post_title.length > 22 ? tableVol.post_title.slice(0, 22) + '...' : tableVol.post_title) : tableVol.post_title}</h2>
                                                    </div>
                                                    <div className="justify-center items-center space-y-2 mb-3">
                                                        <p className="bg-[#f1f1f1] w-full py-2 px-2 rounded-lg tooltip" data-tip="Volunteer Category"><i className="fa-solid fa-tag"></i> {tableVol.category}</p>
                                                        <p className="bg-[#f1f1f1] w-full py-2 px-2 rounded-lg tooltip" data-tip="Apply Last Date"><i className="fa-solid fa-clock"></i> {tableVol.deadline}</p>
                                                    </div>
                                                    <div>
                                                        <Link className="text-center block bg-black text-white py-2 px-2 rounded-lg w-full">Learn More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
