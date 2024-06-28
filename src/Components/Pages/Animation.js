import { motion } from 'framer-motion';
import React from 'react';
import { FaPenFancy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Industries.css'

const Animation = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <h2 className="text-warning text-center my-5"> ANIMATION </h2>
          <div className="d-flex justify-content-center">
            <div className="card ms-2 text-center" style={{ width: '24rem' }}>
              <div className="pt-5">
                <Link to='/' className='icon6 px-1'><FaPenFancy className='p-3' /></Link>
              </div>
              <div className="card-body">
                <Link to='/'><h2 className='card-title text-warning pt-4'> ANIMATION SERVICES </h2>
                  <p className="card-text text-dark pt-4 pb-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati? </p></Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Animation