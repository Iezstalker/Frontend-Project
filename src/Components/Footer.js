import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <section className='bg-dark pt-4 pb-2 mt-5'>
          <div className=" my-5 container">
            <div className="row">
              <div className="col-6 col-md-4">
                <h4 className='text-warning start-0'> About Us </h4>
                <p className='text-light'>Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.</p>
              </div>

              <div className="col-6 col-md-2">
                <h4 className="text-warning"> Main Services</h4>
                <Link to="/Services/PhdDissertation" className='links list-group mb-3 mt-4'>PhD Dissertation</Link>
                <Link to="/Services/Coursework" className='links list-group mb-3'>Coursework</Link>
                <Link to="/Services/LiteratureReview" className='links list-group mb-3'>Literature Review</Link>
                <Link to="/Services/PhdResearch" className='links list-group mb-3'>Phd Research Methodology</Link>
                <Link to="/Services/DataAnalysis" className='links list-group mb-3'>Data Analysis</Link>
                <Link to="/Services/Manuscript" className='links list-group mb-3'>Manuscript</Link>
                <Link to="/Services/EditingServices" className='links list-group mb-3'>Editing Services</Link>
                <Link to="/Services/Animation" className='links list-group mb-3'>Animation</Link>
                <Link to="/Services/Courses" className='links list-group mb-3'>Courses</Link>
              </div>

              <div className="col-6 col-md-2">
                <h4 className='text-warning'> Links </h4>
                <Link to="/Industries" className='links list-group mt-4 mb-3'>Industries</Link>
                <Link to="/Pricing" className='links list-group mb-3'>Pricing Details</Link>
                <Link to="/Insights" className='links list-group mb-3'>Insights</Link>
                <Link to="/HelpGuide" className='links list-group mb-3'>Help-Guide</Link>
                <Link to="/SampleWork" className='links list-group mb-3'>Our Sample Work</Link>
                <Link to="/FAQ" className='links list-group mb-3'>FAQ</Link>
                <Link to="/Career" className='links list-group mb-3'>Career</Link>
                <Link to="/ContactUs" className='links list-group mb-3'>Contact Us</Link>
                <Link to="/TermsAndConditions" className='links list-group mb-3'>Terms and Conditions</Link>
                <Link to="/PrivacyPolicy" className='links list-group mb-3'>Privacy Policy</Link>
                <Link to="/CustomerCare" className='links list-group mb-3'>Customer Centre</Link>
              </div>

              <div className="col-6 col-md-4">
                <h4 className="text-warning"> Contact Us </h4>
                <h5 className='text-light my-3'> Office Headquarters - </h5>
                <h6 className='text-warning my-2'> Nagpur Headquarter:</h6>
                <p className='text-light mb-4'>Suvidha Foundation, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner Nagpur, Maharashtra 441102</p>
                <h6 className="text-warning"> Hyderabad Headquarter:</h6>
                <p className="text-light"> Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad </p>
                <div className="my-4">
                  <span><Link to="https://www.facebook.com/suvidhamahilamandal/" target='_blank' rel='noreferrer' className='me-2 btn btn-outline-primary border border-2 border-primary rounded-5 py-2'><FaFacebookF /></Link>
                  <Link to="https://instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y=" target='_blank' rel='noreferrer' className='mx-1 btn btn-insta rounded-5 py-2 text-light'><BsInstagram /></Link>
                 <Link to="https://www.linkedin.com/company/suvidha-foundation/mycompany/" target='_blank' rel='noreferrer' className='mx-2 btn btn-linkedin rounded-5 py-2 text-light'><FaLinkedinIn /></Link>
                 </span>
                </div>
              </div>
            </div>
          </div>
          <hr className='text-light my-4' />
            <div className="row mx-5 text-center">
              <div className="col-md-8">
                <p className="text-light"> <span className='text-secondary'> ©️ </span>
                  <Link to="/" className='linkto'> Suvidha Foundation (Suvidha Mahila Mandal), </Link>
                  All rights reserved.
                </p>
              </div>
              <div className="col-md-3">
                <p className="text-light">
                  <span className="text-secondary"> By </span>
                  <Link to="/" className='linkto'> Suvidha Foundation </Link>
                </p>
              </div>
            </div>
        </section >
      </motion.div >
    </>
  )
}

export default Footer