import React, { } from 'react';
import { SiWikimediafoundation } from "react-icons/si";
import { Link, NavLink } from 'react-router-dom';
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import './Navbar.css';


const Navbar = () => {

  return (

    <>
      {/* Top Bar Start */}
      <div className="d-none d-md-block">

        <div className="container">
          <div className="row py-2">
            <div className="col-md-2 py-1">
              <FaPhoneAlt className='phone mx-1' />
              <span>
                +91 7020044091
              </span>
            </div>
            <div className="col-md-6 py-1 me-5">
              <span>
                <FaEnvelope className='envelope mx-2' />
                info@suvidhafoundationedutech.org
              </span>
            </div>
            <div className="col-md-2 ms-5 ps-5">
              <span><a href="https://www.facebook.com/suvidhamahilamandal/" target='_blank' rel='noreferrer' className='me-2 btn-facebook p-2 '><FaFacebookF /></a>
                <a href="https://instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y=" target="_blank" rel='noreferrer' className='mx-1 btn-instagram p-2'><BsInstagram /></a>
                <a href="https://www.linkedin.com/company/suvidha-foundation/mycompany/" target="_blank" rel='noreferrer' className='mx-2 btn-linkedinn p-2'><FaLinkedinIn /></a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Top Bar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg z-3 nav-sticky sticky-top bg-light">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand mx-5" to='/'>

            {/* Logo */}
            <SiWikimediafoundation />
            {/* <img src="" alt="" /> */}
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item link-opacity-25-hover">
                <NavLink className="nav-link" aria-current="page" to='/about' >ABOUT US</NavLink>
              </li>
              <li className="nav-item dropdown navbar-dropdown">
                <NavLink className="nav-link dropdown-toggle dropbtn" to="/services"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SERVICES
                </NavLink>
                <ul className="dropdown-menu dropdown-content">
                  <li><Link className="dropdown-item py-2" to="/Services/PhdDissertation"> PHD DISSERTATION</Link></li>
                  <li><Link className="dropdown-item py-2" to="/Services/Coursework"> COURSEWORK </Link></li>
                  <li><Link className="dropdown-item py-2" to="/Services/LiteratureReview"> LITERAUTRE REVIEW</Link></li>
                  <li><Link className="dropdown-item py-2" to="/Services/PhdResearch"> PHD RSEARCH METHODOLOGY </Link></li>
                  <li><Link className="dropdown-item py-2" to="/Services/DataAnalysis"> DATA ANALYTICS</Link></li>
                  <li><Link className="dropdown-item py-2" to="/Services/EditingServices"> EDITING SERVICES </Link></li>
                  <li><Link className="dropdown-item py-2" to="/Services/Manuscript"> MANUSCRIPT </Link></li>
                  <li><Link className="dropdown-item py-2" to="/Services/Courses"> COURSES </Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle dropbtn" to="/industries"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  INDUSTRIES
                </NavLink>
                <ul className='dropdown-menu dropdown-content'>
                  <li><Link className="dropdown-item py-2" to="/Industries/AcademicLawWriting"> ACADEMIC LAW WRITING </Link></li>
                  <li><Link className="dropdown-item py-2" to="/Industries/BusinessManagement"> BUSINESS & MANAGEMENT </Link></li>
                  <li><Link className="dropdown-item py-2" to="/Industries/ArtHumanities"> ARTS & HUMANITIES </Link></li>
                  <li><Link className="dropdown-item py-2" to="/Industries/EconomicsFinanceAcademic"> ECONOMICS & FINANCE ACADEMIC </Link></li>
                  <li><Link className="dropdown-item py-2" to="/Industries/BiologicalLifeScience"> BIOLOGICAL & LIFE SCIENCE </Link></li>
                  <li><Link className="dropdown-item py-2" to="/Industries/MedicineHealthCare"> MEDICINE & HEALTHCARE </Link></li>
                  <li><Link className="dropdown-item py-2" to="/Industries/ComputerScienceInformation"> COMPUTER SCIENCE & INFORMATION </Link></li>
                </ul>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link" to='/Pricing' >PRICING</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/HelpGuide' >HELP-GUIDE</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/ContactUs' >CONTACT US</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/HireAssistant' >HIRE A RESEARCH ASSISTANT</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning button" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};
export default Navbar;