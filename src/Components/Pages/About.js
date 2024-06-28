import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../Constants';


const About = () => {
  return (

    <>
      <section className='about-us my-5 ms-5 ps-4'>
        <div className="container">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <div className="row ps-3">

              {/* About Us */}
              <div className="col-6 col-md-7">
                <h2 className='fw-bold ps-5 text-body-tertiary'> About Us</h2>
                <p className='ps-5 pe-4 text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum possimus consectetur voluptas tempore dolor velit molestias magni unde adipisci omnis perspiciatis quisquam, quam optio nihil vero, iusto dolores culpa. Maxime optio cupiditate enim quo.</p>
              </div>
              <div className="col-6 col-md-4 mb-5">
                <img src={images.Suvidha1} alt="" className='card-img-top' />
              </div>
            </div>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <div className="row">
              <div className="col-6 col-md-4">
                <img src={images.Suvidha1} alt="" className='card-img-top' />
              </div>
              <div className="col-6 col-md-7 text-body-tertiary mb-5">
                <h2 className='fw-bold ps-5'> Our Mission </h2>
                <p className='ps-5 pe-4 text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum possimus consectetur voluptas tempore dolor velit molestias magni unde adipisci omnis perspiciatis quisquam, quam optio nihil vero, iusto dolores culpa. Maxime optio cupiditate enim quo.</p>
              </div>
            </div>
          </motion.div>

          {/* Our Story */}
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <div className="row">
              <div className="col-6 col-md-7 mt-5">
                <h2 className='fw-bold ps-5 text-body-tertiary'> Our Story </h2>
                <p className='ps-5 pe-4 text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum possimus consectetur voluptas tempore dolor velit molestias magni unde adipisci omnis perspiciatis quisquam, quam optio nihil vero, iusto dolores culpa. Maxime optio cupiditate enim quo.</p>
              </div>
              <div className="col-6 col-md-4 mt-5 mb-5">
                <img src={images.Suvidha1} alt="" className='card-img-top' />
              </div>
            </div>
          </motion.div>

          {/* Our Charity Events */}
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <div className="row">
              <div className="col-6 col-md-4">
                <img src={images.Suvidha1} alt="" className='card-img-top' />
              </div>
              <div className="col-6 col-md-7 mb-5">
                <h2 className='fw-bold ps-5 text-body-tertiary'> Our Charity Events </h2>
                <p className='ps-5 pe-4 text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum possimus consectetur voluptas tempore dolor velit molestias magni unde adipisci omnis perspiciatis quisquam, quam optio nihil vero, iusto dolores culpa. Maxime optio cupiditate enim quo.</p>
              </div>
            </div>
          </motion.div>

          {/*  What we do */}
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.8 }}
          >
            <div className="row">
              <div className="col-6 col-md-7 mt-5">
                <h2 className='fw-bold ps-5 text-body-tertiary'> What We Do</h2>
                <p className='ps-5 pe-4 text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum possimus consectetur voluptas tempore dolor velit molestias magni unde adipisci omnis perspiciatis quisquam, quam optio nihil vero, iusto dolores culpa. Maxime optio cupiditate enim quo.</p>
              </div>
              <div className="col-6 col-md-4 mt-5 mb-5">
                <img src={images.Suvidha1} alt="" className='card-img-top' />
              </div>
            </div>
          </motion.div >

        </div>
      </section >
    </>
  )
}

export default About