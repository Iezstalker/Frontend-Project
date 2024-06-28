import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SiInteractiondesignfoundation } from 'react-icons/si';
import './Services.css';

const Services = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className='img-bg'>
          <div className="row row-cols-1 row-cols-md-3 g-2">
            <div className="text-size text-center bg-black opacity-75 col-md-7 pt-5 ps-3">
              <h3 className='text-light'> Why Ph.D. Assistance? </h3>
              <p className="text-light">A Genuine Company with the presence across the World including US, UK & India</p>
              <p className="text-light"> Our team of writers & Statisticians are guided by high quality QC team from Harvard & Alabama</p>
              <p className="text-light"> Highest quality work in the industry </p>
              <p className="text-light"> Registered Company based in Sheffield (U.K), Dallas (U.S) & India </p>
              <p className="text-light"> We guarantee your work and much care about academic success </p>
              <p className="text-light"> Our team of researchers and writers care about your success </p>

              {/* Organization logo */}
              <div className="text-center text-warning my-5">
                <SiInteractiondesignfoundation className='logo' />
              </div>
            </div>

            <div className="col-md-4 mt-5 pt-5 ms-5">
              <div className="container bg-warning opacity-75 text-center mt-5 mx-5 py-2 pe-5">
                <h4 className="text-white"> Academic Research Company Trusted by 2,00,000+ scholars, students & entrepreneurs across the world <br /> Since 2001 </h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-dark pt-5 pb-4">
          <div className="container text-center">
            <h4 className="text-light">Our Main Services </h4>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="row g-0">
          <div className="col-md-6">
            <div className="ps-3 container bg-secondary py-5">
              <ul className="text-white" style={{ listStyleType: 'none' }}>
                <Link to="/dissertation"><li className='fs-4'> Dissertation </li></Link>
                <Link to="/coursework"><li className='fs-4'> Coursework </li></Link>
                <Link to="/literature-review"><li className='fs-4'> Literature Review </li></Link>
                <Link to="/research-methodology"><li className='fs-4'> Research Methodology </li></Link>
                <Link to="/analytics"><li className='fs-4'> Analytics </li></Link>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="container h-100 bg-warning ps-3 py-5">
              <ul className='text-white' style={{ listStyleType: 'none' }}>
                <Link to="/manuscript"><li className="fs-4">Manuscript</li></Link>
                <Link to="/editing"><li className="fs-4">Editing</li></Link>
                <Link to="/animation"><li className="fs-4">Animation</li></Link>
                <Link to="/courses"><li className="fs-4">Courses</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        {/* Navigation Secton */}
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active text-black" id="pills-dissertation-tab" data-bs-toggle="pill" data-bs-target="#pills-dissertation" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Dissertation</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link text-black" id="pills-coursework-tab" data-bs-toggle="pill" data-bs-target="#pills-coursework" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Coursework</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link text-black" id="pills-literature-tab" data-bs-toggle="pill" data-bs-target="#pills-literature" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Literature Review</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link text-black" id="pills-research-tab" data-bs-toggle="pill" data-bs-target="#pills-research" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Research Methodology</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link text-black" id="pills-analytics-tab" data-bs-toggle="pill" data-bs-target="#pills-analytics" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Analytics</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link text-black" id="pills-manuscript-tab" data-bs-toggle="pill" data-bs-target="#pills-manuscript" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Manuscript</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link text-black" id="pills-editing-tab" data-bs-toggle="pill" data-bs-target="#pills-editing" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Editing</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link text-black" id="pills-animation-tab" data-bs-toggle="pill" data-bs-target="#pills-animation" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Animation</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link text-black" id="pills-courses-tab" data-bs-toggle="pill" data-bs-target="#pills-courses" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Courses</button>
            </li>
          </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-dissertation" role="tabpanel" aria-labelledby="pills-dissertation-tab" tabIndex="0">
            <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col-md-6">
                <ul className='mt-2'>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Ph.D. Topic Selection</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis possimus eum?</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Probem Identification</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem officiis magni hic explicabo dolorem ullam!</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Research Proposal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum libero at, distinctio reprehenderit repudiandae fugiat.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Pilot Study</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae corrupti sapiente quos saepe rerum tenetur eius?</p>
                  </li>
                </ul>
              </div>
              <div className="container col-md-6">
                <ul className="mt-2">
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Full)</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Part) </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Consultation </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque .</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Viva Voice </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque veritatis.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-coursework" role="tabpanel" aria-labelledby="pills-coursework-tab" tabIndex="0">
          <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col-md-6">
                <ul className='mt-2'>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Ph.D. Topic Selection</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis possimus eum?</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Probem Identification</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem officiis magni hic explicabo dolorem ullam!</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Research Proposal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum libero at, distinctio reprehenderit repudiandae fugiat.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Pilot Study</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae corrupti sapiente quos saepe rerum tenetur eius?</p>
                  </li>
                </ul>
              </div>
              <div className="container col-md-6">
                <ul className="mt-2">
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Full)</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Part) </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Consultation </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque .</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Viva Voice </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque veritatis.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-literature" role="tabpanel" aria-labelledby="pills-literature-tab" tabIndex="0">
          <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col-md-6">
                <ul className='mt-2'>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Ph.D. Topic Selection</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis possimus eum?</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Probem Identification</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem officiis magni hic explicabo dolorem ullam!</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Research Proposal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum libero at, distinctio reprehenderit repudiandae fugiat.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Pilot Study</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae corrupti sapiente quos saepe rerum tenetur eius?</p>
                  </li>
                </ul>
              </div>
              <div className="container col-md-6">
                <ul className="mt-2">
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Full)</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Part) </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Consultation </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque .</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Viva Voice </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque veritatis.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-research" role="tabpanel" aria-labelledby="pills-research-tab" tabIndex="0">
          <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col-md-6">
                <ul className='mt-2'>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Ph.D. Topic Selection</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis possimus eum?</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Probem Identification</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem officiis magni hic explicabo dolorem ullam!</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Research Proposal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum libero at, distinctio reprehenderit repudiandae fugiat.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Pilot Study</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae corrupti sapiente quos saepe rerum tenetur eius?</p>
                  </li>
                </ul>
              </div>
              <div className="container col-md-6">
                <ul className="mt-2">
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Full)</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Part) </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Consultation </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque .</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Viva Voice </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque veritatis.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-analytics" role="tabpanel" aria-labelledby="pills-analytics-tab" tabIndex="0">
          <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col-md-6">
                <ul className='mt-2'>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Ph.D. Topic Selection</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis possimus eum?</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Probem Identification</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem officiis magni hic explicabo dolorem ullam!</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Research Proposal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum libero at, distinctio reprehenderit repudiandae fugiat.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Pilot Study</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae corrupti sapiente quos saepe rerum tenetur eius?</p>
                  </li>
                </ul>
              </div>
              <div className="container col-md-6">
                <ul className="mt-2">
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Full)</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Part) </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Consultation </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque .</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Viva Voice </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque veritatis.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-manuscript" role="tabpanel" aria-labelledby="pills-manuscript-tab" tabIndex="0">
          <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col-md-6">
                <ul className='mt-2'>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Ph.D. Topic Selection</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis possimus eum?</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Probem Identification</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem officiis magni hic explicabo dolorem ullam!</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Research Proposal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum libero at, distinctio reprehenderit repudiandae fugiat.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Pilot Study</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae corrupti sapiente quos saepe rerum tenetur eius?</p>
                  </li>
                </ul>
              </div>
              <div className="container col-md-6">
                <ul className="mt-2">
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Full)</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Part) </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Consultation </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque .</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Viva Voice </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque veritatis.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-editing" role="tabpanel" aria-labelledby="pills-editing-tab" tabIndex="0">
          <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col-md-6">
                <ul className='mt-2'>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Ph.D. Topic Selection</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis possimus eum?</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Probem Identification</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem officiis magni hic explicabo dolorem ullam!</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Research Proposal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum libero at, distinctio reprehenderit repudiandae fugiat.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Pilot Study</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae corrupti sapiente quos saepe rerum tenetur eius?</p>
                  </li>
                </ul>
              </div>
              <div className="container col-md-6">
                <ul className="mt-2">
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Full)</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Part) </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Consultation </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque .</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Viva Voice </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque veritatis.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-animation" role="tabpanel" aria-labelledby="pills-animation-tab" tabIndex="0">
          <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col-md-6">
                <ul className='mt-2'>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Ph.D. Topic Selection</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis possimus eum?</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Probem Identification</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem officiis magni hic explicabo dolorem ullam!</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Research Proposal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum libero at, distinctio reprehenderit repudiandae fugiat.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Pilot Study</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae corrupti sapiente quos saepe rerum tenetur eius?</p>
                  </li>
                </ul>
              </div>
              <div className="container col-md-6">
                <ul className="mt-2">
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Full)</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Part) </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Consultation </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque .</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Viva Voice </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque veritatis.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-courses" role="tabpanel" aria-labelledby="pills-courses-tab" tabIndex="0">
          <div className="row row-cols-1 row-cols-md-3 g-1">
              <div className="col-md-6">
                <ul className='mt-2'>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Ph.D. Topic Selection</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis possimus eum?</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Probem Identification</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem officiis magni hic explicabo dolorem ullam!</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Research Proposal</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rerum libero at, distinctio reprehenderit repudiandae fugiat.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Pilot Study</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione beatae corrupti sapiente quos saepe rerum tenetur eius?</p>
                  </li>
                </ul>
              </div>
              <div className="container col-md-6">
                <ul className="mt-2">
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Full)</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Dissertation (Part) </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque.</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4>Ph.D Consultation </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque .</p>
                  </li>
                  <li className="text-white bg-black mb-2 ps-4 py-2"><h4> Viva Voice </h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore velit nesciunt esse earum illo eaque veritatis.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Services;
