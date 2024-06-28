import React from 'react';
import { images } from '../../Constants';
import { motion } from 'framer-motion';

const SampleWork = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-black">
          <div className="container text-center pt-5 pb-4">
            <h2 className="text-warning"> Sample Works </h2>
            <p className="fs-5 text-white pb-4"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempora placeat velit at deleniti totam animi doloribus iusto inventore? Ad nam ea tenetur? </p>
            <a href="/Services" className="btn btn-outline-warning button"> View Our Services </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white my-2">
          <div className="row rows-cols-1">
            <div className="col-md-5 mt-4 ms-5 ps-5">
              <div className="bg-warning-subtle ps-5 py-3 ">
                <a href="/SampleWork" className='text-decoration-none'> <h5 className='text-dark-emphasis'> PhD Dissertation Sample </h5></a>
              </div>
              <div className="border ps-5 pt-4">
                <a href="/SampleWork" className='text-decoration-none links'> <p className="text-secondary"> Lorem, ipsum dolor. </p></a>
                <a href="/SampleWork" className='text-decoration-none links'> <p className="text-secondary"> Lorem, ipsum dolor. </p></a>
                <a href="/SampleWork" className='text-decoration-none links'> <p className="text-secondary"> Lorem, ipsum dolor. </p></a>
                <a href="/SampleWork" className='text-decoration-none links'> <p className="text-secondary"> Lorem, ipsum dolor. </p></a>
                <a href="/SampleWork" className='text-decoration-none links'> <p className="text-secondary"> Lorem, ipsum dolor. </p></a>
              </div>

              <div className="bg-warning-subtle ps-5 py-3 mb-5">
                <a href="/SampleWork" className='text-decoration-none'> <h5 className='text-dark-emphasis'> PhD Dissertation Sample </h5></a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Card Section */}
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mt-5">

          <section className='cards-section'>
            <div className="container mt-5">
              <h5 className='text-dark'><b> Services </b> </h5>
            </div>

            {/* Card1 */}
            <div className="row row-cols-1 row-cols-md-3 g-4">

              <div className="col-md-3">
                <div className="">
                  <img src={images.Suvidha1} className="card-img-top bg-light" alt="img" />
                </div>
                <div className="card-body bg-secondary-subtle py-2">
                  <a href='/SampleWork' className="card-text text-black px-2 links"> PhD Dissertation Service </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-3">
                <div className="">
                  <img src={images.Suvidha4} className="card-img-top bg-light" alt="img" />
                </div>
                <div className="card-body bg-secondary-subtle py-2">
                  <a href='/SampleWork' className="card-text text-black px-2 links"> PhD Dissertation Service </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-3">
                <div className="">
                  <img src={images.Suvidha1} className="card-img-top bg-light" alt="img" />
                </div>
                <div className="card-body bg-secondary-subtle py-2">
                  <a href='/SampleWork' className="card-text text-black px-2 links"> PhD Dissertation Service </a>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-md-3" >
                <div className="">
                  <img src={images.Suvidha4} className="card-img-top bg-light" alt="img" />
                </div>
                <div className="card-body bg-secondary-subtle py-2">
                  <a href='/SampleWork' className="card-text text-dark px-2 links"> PhD Dissertation Service </a>
                </div>
              </div>
            </div>
      </section >
    </div >
      </motion.div >
    </>
  )
}

export default SampleWork