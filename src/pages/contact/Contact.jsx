import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div>
            <Helmet>
                <title>Contact Us | Volunteer Hub</title>
            </Helmet>
            <div className="bg-[#000] py-[100px] lg:py-[150px]">
                <div className="container">
                    <h1 className="text-4xl text-center font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
                </div>
            </div>
            <div className="container">
                <div className="mt-20 lg:mt-[60px] mb-20 lg:mb-[60px]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div className="contact-card hover-effect">
                            <div className="mb-5">
                                <div className="cart-icon-box">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Phone</h3>
                                <p>+1 123456789</p>
                            </div>
                        </div>
                        <div className="contact-card hover-effect">
                            <div className="mb-5">
                                <div className="cart-icon-box">
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Email</h3>
                                <p>inf@volunteerhub.com</p>
                            </div>
                        </div>
                        <div className="contact-card hover-effect">
                            <div className="mb-5">
                                <div className="cart-icon-box">
                                    <i class="fa-solid fa-map"></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Address</h3>
                                <p>456 Maple Avenue, City, State</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}  className="space-y-5">
                            <label className="input input-bordered flex items-center gap-2">
                                Name
                                <input type="text" className="grow" placeholder="Jon Doe" {...register("name", { required: true })} />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Phone
                                <input type="text" className="grow" placeholder="Phone" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Email
                                <input type="text" className="grow" placeholder="demo@site.com" />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Subject
                                <input type="text" className="grow" placeholder="Subject" />
                            </label>
                            <textarea className="textarea textarea-bordered w-full text-base" placeholder="Message"></textarea>
                            <button className="btn btn-primary hover-effect">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="mb-20 mt-20">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12274.310798966691!2d90.40546663404496!3d23.847938897519192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c691ba478fbd%3A0xd1b3f71371eb15ec!2sHazrat%20Shahjalal%20International%20Airport!5e0!3m2!1sen!2sbd!4v1713369013829!5m2!1sen!2sbd"
                        width="100%"
                        height="450"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>
            </div>
        </div>
    );
};

export default Contact;