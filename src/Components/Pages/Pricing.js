import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="row">
          <div className="col-md-7 container">
            <h2 className="text-warning my-2"> A Trusted & Academically Sound Mentors representing various Countries </h2>
            <h2 className="text-warning text-center mb-2"> About PhD Assistance </h2>
            <p className="text-secondary mb-2"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium voluptatem ipsam pariatur dicta quam est architecto explicabo, nobis nihil quisquam omnis asperiores modi magni harum quos perspiciatis. Hic omnis consequuntur sunt laboriosam eius, quod sit neque at eligendi enim perferendis, porro iure cum dolores earum? Possimus blanditiis quo dicta perspiciatis minima et necessitatibus officiis iste, cumque accusantium quos non sapiente, omnis laudantium ullam explicabo magnam perferendis optio. Rerum dolorem saepe nemo cumque pariatur, delectus ea modi voluptatum dolore omnis at adipisci explicabo amet veritatis. Perspiciatis dolorum impedit deserunt animi consequatur laboriosam, numquam id suscipit nihil, architecto molestias cum.</p>
            <div className="text-center mb-5">
              <a href="/" className="btn btn-outline-warning buttton"> Order Now </a>
            </div>
          </div>
        </div>


        <div className="container">

          <table className="table table-light mt-5">
            <thead>
              <tr>
                <th scope="col"><b> SERVICE </b></th>
                <th scope="col"><b> CRITERIA </b></th>
                <th scope="col"><b> PRICE in US$ </b></th>
                <th scope="col"><b> Price in Rupees </b></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td> PhD Topic Selection </td>
                <td>(2-3 topics)</td>
                <td>250</td>
                <td>18,000*</td>
              </tr>

              <tr>
                <td>PhD Proposal</td>
                <td>(1500 -2000 words)</td>
                <td>490</td>
                <td>34,000*</td>
              </tr>

              <tr>
                <td>PhD Literature Review</td>
                <td>(5,500 –6,000 words)</td>
                <td>685</td>
                <td>47500*</td>
              </tr>

              <tr>
                <td>PhD Reasearch Methodology</td>
                <td>(4500 words)</td>
                <td>633</td>
                <td>43700*</td>
              </tr>

              <tr>
                <td>PhD Statistical Analysis</td>
                <td><a href="/ContactUs" className='linkto linked'>(Contact Us)</a></td>
                <td>830</td>
                <td>57,600*</td>
              </tr>

              <tr>
                <td>PhD Manuscript</td>
                <td>(2000 - 2500 words)</td>
                <td>980</td>
                <td>69,300*</td>
              </tr>

              <tr>
                <td>PhD Dissertation Editing</td>
                <td>(12000 - 14000 words)</td>
                <td>1440</td>
                <td>99,950*</td>
              </tr>

              <tr>
                <td>PhD Thesis</td>
                <td>(25000 words)</td>
                <td>1940</td>
                <td>1,37,000*</td>
              </tr>

              <tr>
                <td>PhD Coursework</td>
                <td>(2500 words)</td>
                <td>390</td>
                <td>27,000*</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-dark mt-5 pt-5 container">*Conditions Apply:</p>
        <p className="text-dark my-3 container">Depend upon the requirements, Price may vary accordingly</p>
        <p className="text-dark container">To avail our services & discuss your requirements with our expertise, Kindly react us at <a href="mailto:abc@abcmail.com" className='mail'>abc@abcmail.com</a></p>
      </motion.div>
    </>
  )
}

export default Pricing