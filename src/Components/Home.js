import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { images } from '../Constants';
import { IoIosSearch } from 'react-icons/io'
import { TbReportAnalytics } from "react-icons/tb";
import { ImBook } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RxAvatar } from 'react-icons/rx';
import './Home.css';


const Home = () => {

    return (
        <>

            {/* Hero Section-1*/}
            <section>
                <div className='container-fluid'>

                    {/* Carousel - Section */}
                    <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container-fluid">
                                    <div className="container text-center position-relative">
                                        <img src={images.Suvidha4} alt="pic" className='img-fluid opacity-50' />
                                        <div className='position-absolute top-50 start-50 translate-middle'>
                                            <h3><b> Lorem ipsum dolor sit</b></h3>
                                            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse vitae est cupiditate enim, eaque, eum aperiam nihil fuga exercitationem quisquam odio veniam excepturi. </p>

                                            {/* Button */}
                                            <Link to='/AboutUs' className='btn btn-outline-warning button text-black mt-2 btn-lg'>About Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="container-fluid">
                                    <div className="container text-center position-relative">
                                        <img src={images.Suvidha1} alt="pic" className="img-fluid opacity-50" />
                                        <div className='position-absolute top-50 start-50 translate-middle'>
                                            <h3> <b> Lorem ipsum dolor sit </b> </h3>
                                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum maiores sed autem velit. Architecto consectetur dicta placeat ratione enim nulla, perferendis natus exercitationem? </p>

                                            {/* Button */}
                                            <Link to='/AboutUs' className='btn btn-outline-warning button text-black mt-2 btn-lg'>About Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev mx-2" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon bg-warning py-4 px-2" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next mx-2" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon bg-warning px-2 py-4" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section >

            {/* Card Section */}

            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.8 }}
            >
                <section className='cards-section'>
                    <div className="container text-center my-5">
                        <h2 className='text-warning'> Why Suvidha Foundation </h2>
                        <h2> A Trusted & Academically Sound Mentors representing various Countries </h2>
                    </div>

                    {/* Card1 */}
                    <div className="container">
                        <div className="content">
                            <div className="wrapper">
                                <h4 className="card-title text-center mb-2 text-danger text-uppercase">Title</h4>
                                <div className="box zoom-out">
                                    <img src={images.Suvidha1} alt="Melody Noir" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text mt-4 text-bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere similique magnam eius nam optio numquam, odio sapiente ullam nesciunt sit reprehenderit laborum sunt.</p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="wrapper">
                                <h4 className="card-title text-center mb-2 text-danger text-uppercase">Title</h4>
                                <div className="box zoom-out">
                                    <img src={images.Suvidha4} alt="Melody Noir" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text mt-4 text-bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere similique magnam eius nam optio numquam, odio sapiente ullam nesciunt sit reprehenderit laborum sunt.</p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="wrapper">
                                <h4 className="card-title text-center mb-2 text-danger text-uppercase">Title</h4>
                                <div className="box zoom-out">
                                    <img src={images.Suvidha1} alt="Melody Noir" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text mt-4 text-bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere similique magnam eius nam optio numquam, odio sapiente ullam nesciunt sit reprehenderit laborum sunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </motion.div>

            {/* Mentors Section */}

            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.8 }}
            >
                <section className='mentor'>
                    <div className="py-2 mt-5">

                        <div className="container text-center my-5">
                            <h2 className='text-warning'> Our Mentors </h2>
                            <h4>Intellectual, Passionate, and Highly Collaborative</h4>
                            <button className="btn btn-outline-warning button text-black mt-3"> Learn More </button>
                        </div>
                    </div>

                    {/* Card Section */}

                    <div className="background">

                        <div className="container">

                            <div className="row row-cols-1 row-cols-md-3 g-4">

                                {/* Card1 */}

                                <div className="col" style={{ width: '34rem' }}>
                                    <div className="box mt-5" style={{ boxShadow: '2px 5px 5px 2px rgba(0, 0, 0, 0.19)' }}>
                                        <img src={images.Suvidha1} className="card-img-top" alt="img" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-3 mb-3">Title</h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere similique magnam eius nam optio numquam, odio sapiente ullam nesciunt sit reprehenderit laborum sunt.</p>
                                    </div>
                                </div>

                                {/* Card2 */}

                                <div className="col" style={{ width: '24rem' }}>
                                    <div className="box mt-5" style={{ boxShadow: '2px 5px 5px 2px rgba(0, 0, 0, 0.19)' }}>

                                        <img src={images.Suvidha4} className="card-img-top" alt="img" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-3 mb-3">Title</h5>
                                        <p className="card-text mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sit temporibus iure animi cupiditate explicabo voluptates vel quis nobis atque, harum et quisquam doloribus.</p>
                                    </div>
                                </div>

                                {/* Card3 */}

                                <div className="col" style={{ width: '24rem' }}>
                                    <div className="box mt-5" style={{ boxShadow: '2px 5px 5px 2px rgba(0, 0, 0, 0.19)' }}>
                                        <img src={images.Suvidha1} className="card-img-top bg-light" alt="img" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-3 mb-3">Title</h5>
                                        <p className="card-text mt-4 text-bg-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus voluptate quas reprehenderit harum doloremque ipsam natus iure aliquam, omnis ab. Maiores, nam quae!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>

            {/* Process Section */}

                <section className='sample-work'>
                    <div className="text-center background-img mt-5">
                        {/* <div className="text-center"> */}

                        <h2 className='text-secondary mt-4'> Find more About Our Quality Procedure </h2>
                        <button className="btn btn-outline-warning button mt-3 text-black"> About Suvidha Foundation </button>
                        {/* </div> */}
                        <div className=" text-center mt-4">
                            <h2> Sample Work </h2>
                            <Link to='/PhdDissertation' className="btn btn-outline-dark mt-3 mx-2 fw-bold"> <ImBook className='me-2' /> Dissertation </Link>
                            <Link to='/Statistical' className="btn btn-outline-dark mt-3 mx-2 fw-bold"> <IoDocumentTextOutline className='me-2' /> Statistical Assignment </Link>
                            <div>
                                <Link to='/Coding' className="btn btn-outline-dark mx-2 my-3 fw-bold"> <IoIosSearch className='me-2' /> Coding and Implementation </Link>
                                <Link to='/Plagiarism' className="btn btn-outline-dark my-3 mx-2 fw-bold"> <TbReportAnalytics className='me-2' /> Plagiarism Report </Link>
                            </div>
                        </div>
                    </div>
                </section>

            {/* Testimony Section */}
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.8 }}
            >
                <section className="testimony my-5">
                    <div className="container text-center text-warning">
                        <h2>Testimony</h2>
                    </div>

                    <div className="container-fluid my-4">
                        <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride='carousel'>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container-fluid">
                                        <div className="container text-center position-relative mt-4 mb-5 pb-4">
                                            {/* Avatar Icon */}
                                            {/* <img src={images.} className="d-block w-100" alt="images" /> */}
                                            <RxAvatar style={{ width: '6rem', height: '9rem' }} />
                                            <div className="">
                                                {/* <h5>First slide label</h5> */}
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit quaerat at ducimus quos sunt, laudantium commodi debitis atque quod.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container-fluid">
                                        <div className="container text-center position-relative mt-4 mb-5 pb-4">
                                            {/* Avatar Icon */}
                                            {/* <img src={images.} className="d-block w-100" alt="images" /> */}
                                            <RxAvatar style={{ width: '6rem', height: '9rem' }} />
                                            <div className="">
                                                {/* <h5>Second slide label</h5> */}
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga nisi dolore odit quas error officia temporibus animi autem voluptate.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container-fluid">
                                        <div className="container text-center position-relative mt-4 mb-5 pb-4">
                                            {/* Avatar Icon */}
                                            {/* <img src={images.} className="d-block w-100" alt="images" /> */}
                                            <RxAvatar style={{ width: '6rem', height: '9rem' }} />
                                            <div className="">
                                                {/* <h5>Third slide label</h5> */}
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime cupiditate impedit recusandae amet soluta eos, fugiat facilis quo a.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>
            </motion.div>

            {/* Insights Section */}
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.8 }}
            >
                <section className="insights bg-light py-1">
                    <div className="container text-center text-warning my-4">
                        <h2> Insights </h2>
                    </div>

                    {/* Insights Card Section */}

                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 g-3">
                            <div className="col">
                                <figure className="snip1477">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg" alt="img" />
                                    <div className="title">
                                        <div>
                                            <h5>Who are we?</h5>
                                            <h6> Trust, Quality </h6>
                                        </div>
                                    </div>
                                    <figcaption>
                                        {/* <p>Which is worse, that everyone has his price, or that the price is always so low.</p> */}
                                    </figcaption>
                                    {/* <a href="/"></a> */}
                                </figure>
                            </div>
                            <div className="col">
                                <figure className="snip1477 ">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg" alt="img" />
                                    <div className="title">
                                        <div>
                                            <h5> Brochure </h5>
                                            <h6> Lorem, ipsum dolor.</h6>
                                        </div>
                                    </div>
                                    <figcaption>
                                        {/* <p>Which is worse, that everyone has his price, or that the price is always so low.</p> */}
                                    </figcaption>
                                    {/* <a href="/"></a> */}
                                </figure>

                            </div>
                            <div className="col">
                                <figure className="snip1477">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg" alt="img" />
                                    <div className="title">
                                        <div>
                                            <h5> Brochure </h5>
                                            <h6>Lorem ipsum dolor.</h6>
                                        </div>
                                    </div>
                                    <figcaption>
                                        {/* <p>Which is worse, that everyone has his price, or that the price is always so low.</p> */}
                                    </figcaption>
                                    {/* <a href="/" target='_blank'></a> */}
                                </figure>
                            </div>

                        </div>
                    </div>
                </section >
            </motion.div >
        </>
    )
}

export default Home