import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Link } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';

const Slider = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    return (
        <div className='mt-5 mb-[80px]'>
            <div className='container'>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='h-[80vh] lg:h-[50vh] flex hero-slide hero-slide1'>
                            <div className='container text-center'>
                                <div className="slide-content space-y-5">
                                    <h1 className='text-[32px] lg:text-5xl font-bold'>Empower Change</h1>
                                    <p className='max-w-[550px] mx-auto text-base lg:text-xl'>Join us in making a difference. Explore volunteer opportunities that empower communities and transform lives.</p>
                                    <Link to="/contact-us" className='btn btn-primary px-8'>Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[80vh] lg:h-[50vh] flex hero-slide hero-slide2'>
                            <div className='container text-center'>
                                <div className="slide-content space-y-5">
                                    <h1 className='text-[32px] lg:text-5xl font-bold'>Unite for Impact</h1>
                                    <p className='max-w-[550px] mx-auto text-base lg:text-xl'>Together, we can achieve greatness. Discover how your contributions can create positive change and leave a lasting impact.</p>
                                    <Link to="/about-us" className='btn btn-primary px-8'>About Us</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-[80vh] lg:h-[50vh] flex hero-slide hero-slide3'>
                            <div className='container text-center'>
                                <div className="slide-content space-y-5">
                                    <h1 className='text-[32px] lg:text-5xl font-bold'>Inspire Hope</h1>
                                    <p className='max-w-[550px] mx-auto text-base lg:text-xl'>Be a beacon of hope in someone's life. Explore ways to spread kindness, compassion, and joy through volunteerism.</p>
                                    <Link to="/about-us" className='btn btn-primary px-8'>About Us</Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;