import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../Constants';
import { FaBriefcase, FaGlobeAsia, FaPenFancy } from 'react-icons/fa';
import { MdComputer, MdOutlineComputer } from 'react-icons/md';
import { IoBasketballOutline } from 'react-icons/io5';
import { BiPlusMedical } from 'react-icons/bi';
import { GrMoney } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './Industries.css';


const Industries = () => {
    return (
        <>
            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.8 }}
            >
                <div className="pe-5 me-5">
                    <img src={images.imgbg7} alt="" className='img-fluid pe-5' />
                </div>

            </motion.div>

            <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.8 }}
            >
                <div className="container">
                    <h2 className="text-warning text-center my-5"> INDUSTRIES </h2>

                    <div className="row row-cols-1 row-cols-md-3 g-4">

                        {/* Card 1  */}
                        <div className="col-md-3 card ms-2 text-center" style={{ width: '20rem' }}>
                            <div className="pt-5">
                                <Link to='/' className='icon6 px-2 pb-1'><FaPenFancy className='p-3' /></Link>
                            </div>
                            <div className="card-body">
                                <Link to="/"><h2 className="card-title text-warning pt-4"> ACADEMIC LAW WRITING </h2>
                                    <p className="card-text text-black pt-4 pb-5"> Law Dissertation (Thesis), Assignments, Manuscript Writing & Editing Services </p></Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-3 card ms-2 text-center" style={{ width: '20rem' }}>
                            <div className="pt-5">

                                <Link to='/' className='icon6 px-2 pb-1'><FaBriefcase className='p-3' /></Link>
                            </div>
                            <div className="card-body">
                                <Link to='/'><h2 className="card-title text-warning pt-4"> BUSINESS & MANAGEMENT </h2>
                                    <p className="card-text text-black pt-4 pb-5"> Business & Management Dissertation (Thesis), Assignments, Manuscript Writing & Editing Services </p></Link>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-3 card ms-2 text-center" style={{ width: '20rem' }}>
                            <div className="pt-5">
                                <Link to='/' className='icon6 px-2 pb-1'><MdComputer className='p-3' /></Link>
                            </div>
                            <div className="card-body">
                                <Link to='/'><h2 className="card-title text-warning pt-4"> ENGINEERING & TECHNOLOGY </h2>
                                    <p className="card-text text-black pt-4 pb-5"> Engineering & Technology Assignments, Manuscript Writing & Editing Services </p></Link>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-md-3 card ms-2 text-center" style={{ width: '20rem' }}>
                            <div className="pt-5">
                                <Link to='/' className='icon6 px-2 pb-1'><IoBasketballOutline className='p-3' /></Link>
                            </div>
                            <div className="card-body">
                                <Link to='/'><h2 className='card-title text-warning pt-4'> ARTS & HUMANITIES </h2>
                                    <p className="card-text text-dark pt-4 pb-5"> Arts & Humanities (Thesis), Assignments, Manuscript Writing & Editing Services </p></Link>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="col-md-3 card ms-2 text-center" style={{ width: '20rem' }}>
                            <div className="pt-5">
                                <Link to='/' className='icon6 px-2 pb-1'><GrMoney className='p-3' /></Link>
                            </div>
                            <div className="card-body">
                                <Link to='/'><h2 className="card-title text-warning pt-4"> ECONOMICS & FINANCE ACADEMIC </h2>
                                    <p className="card-text text-dark pt-4 pb-5"> Economics & Finance Dissertation (Thesis), Assignments, Manuscript Writing & Editing Services </p></Link>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="col-md-3 card ms-2 text-center" style={{ width: '20rem' }}>
                            <div className="pt-5">
                                <Link to='/' className='icon6 px-2 pb-1'><FaGlobeAsia className='p-3' /></Link>
                            </div>
                            <div className="card-body">
                                <Link to='/'><h2 className="card-title text-warning pt-4"> BIOLOGICAL & LIFE SCIENCE </h2>
                                    <p className="card-text text-dark pt-4 pb-5"> Biological & Life Science (Thesis), Assignments, Manuscript Writing & Editing Services </p></Link>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="col-md-3  card ms-2 text-center" style={{ width: '20rem' }}>
                            <div className="pt-5">
                                <Link to='/' className='icon6 px-2 pb-1'><BiPlusMedical className='p-3' /></Link>
                            </div>
                            <div className="card-body">
                                <Link to='/'> <h2 className="card-title text-warning pt-4"> MEDICINE & HEALTHCARE </h2>
                                    <p className="card-text text-dark pt-4 pb-5"> Medicine & Healthcare Dissertation (Thesis), Assignments, Manuscript Writing</p></Link>
                            </div>
                        </div>

                        {/* Card 8 */}
                        <div className="col-md-3 card ms-2 text-center" style={{ width: '20rem' }}>
                            <div className="pt-5">
                                <Link to='/' className='icon6 px-2 pb-1'><MdOutlineComputer className='p-3' /></Link>
                            </div>
                            <div className="card-body">
                                <Link to='/'> <h2 className="card-title text-warning pt-4"> COMPUTER SCIENCE & INFORMATION </h2>
                                    <p className="card-text text-dark pt-4 pb-5"> Computer Science & Information Technology (Thesis), Assignments </p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div >
        </>
    )
}

export default Industries