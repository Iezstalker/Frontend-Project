import React from 'react';
import { motion } from 'framer-motion';
import { FaPenFancy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Industries.css';


const Courses = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="text-warning text-center my-5"> Courses </h2>

          <div className="row row-cols-1 row-cols-md-3 g-2">

            {/* Card 1  */}
            <div className="col-md-5 card ms-2 text-center" style={{ width: '24rem' }}>
              <div className="pt-5">
                <Link to='/' className='icon6 px-1'><FaPenFancy className='p-3' /></Link>
              </div>
              <div className="card-body">
                <Link to="/" ><h2 className="card-title text-warning pt-4"> Conducting Research </h2>
                  <p className="card-text text-black pt-4 pb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi? </p></Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-5 card ms-2 text-center" style={{ width: '24rem' }}>
              <div className="pt-5">

                <Link to='/' className='icon6 px-1'><FaPenFancy className='p-3' /></Link>
              </div>
              <div className="card-body">
                <Link to='/'><h2 className="card-title text-warning pt-4"> Statistics </h2>
                  <p className="card-text text-black pt-4 pb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore? </p></Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-5 card ms-2 text-center" style={{ width: '24rem' }}>
              <div className="pt-5">
                <Link to='/' className='icon6 px-1'><FaPenFancy className='p-3' /></Link>
              </div>
              <div className="card-body">
                <Link to='/'><h2 className="card-title text-warning pt-4"> Manuscript writing </h2>
                  <p className="card-text text-black pt-4 pb-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia? </p></Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-5 card ms-2 text-center" style={{ width: '24rem' }}>
              <div className="pt-5">
                <Link to='/' className='icon6 px-1'><FaPenFancy className='p-3' /></Link>
              </div>
              <div className="card-body">
                <Link to='/'><h2 className='card-title text-warning pt-4'> Research Methodology </h2>
                  <p className="card-text text-dark pt-4 pb-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati? </p></Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div >
    </>
  )
}

export default Courses