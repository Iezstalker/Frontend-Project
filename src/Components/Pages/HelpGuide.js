import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../../Constants';
import './HelpGuide.css';

const HelpGuide = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
            <img src={images.imgbg4} alt="" className='img-fluid w-75' />
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h1 className="text-warning text-center mt-5"> SEARCH FOR HELP GUIDE </h1>
          <section className='bg-warning-subtle pt-4 pb-2 mt-5 container'>
            <div className=" my-5 container">
              <div className="row ms-5 ps-3">
                <div className="col-6 col-md-2 mx-3">
                  <Link to="/" className='list-group mb-3 linkto text-secondary'> HEALTH & MEDICAL</Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Nursing </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'>Clinical Pharmocology</Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'>Public Health </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'>Food Science & Nutrition</Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Complimentary & Alternative Medicine </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Psychology & Psychiatry </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Politics & Sociology </Link>
                </div>

                <div className="col-6 col-md-2 mx-3">
                  <Link to="/" className='text-secondary linkto list-group mb-3'> BIOLOGICAL & SCIENCE </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Agricultural & Bioinformatics </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Cancer / Oncology </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Genetics </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'>Medical / Clinical Science </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Obstetrics, Gynecology & Reproduction </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Molecular Biology </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Neuroscience / Neurology </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Psychology & Sports Science</Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Public Health& Epidemiology </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Immunology </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Biotechnology </Link>
                </div>

                <div className="col-6 col-md-2 mx-3">
                  <Link to="/" className='text-secondary linkto list-group mb-3'> ENGINEERING </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Biomedical Engineering </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Environmental Engineering </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Civil & Structural Engineering </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Chemical Engineering </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Manufacturing & Materials Science </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Nanotechnology </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Mechanical Engineering </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Software Engineering </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Telecommunciations </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Electricals & Electronic </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Data Mining / Image Mining / Cloud Computing </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Computer Science Engineering </Link>
                </div>

                <div className="col-6 col-md-2 mx-3">
                  <Link to="/" className='text-secondary linkto list-group mb-3'> BUSINESS & MANAGEMENT & HUMANITIES </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Development Studies </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Education </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Human Resource Management </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> IT / Strategic Marketing </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Social Work, Social Policy & Administration </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Modern Languages & Linguistics </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Philosophy </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Helathn Science </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> The Middle East & African Studies (MENA) </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Architectural & The Built Environment </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Biotechnology </Link>
                </div>

                <div className="col-6 col-md-2 mx-3">
                  <Link to="/" className='text-secondary linkto list-group mb-3'> FINANCE & OTHERS </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Accounting & Finance </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Marketing </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Tourism & Hospitality </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> History </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Classics & Ancient History </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Law </Link>
                  <Link to="/" className='text-secondary linkto list-group mb-3'> Operational Research </Link>
                </div>
              </div>
            </div>
          </section >
        </div>
      </motion.div>
    </>
  )
}

export default HelpGuide