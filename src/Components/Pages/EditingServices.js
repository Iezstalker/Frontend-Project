import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FcBusinesswoman, FcBusinessman } from 'react-icons/fc';
import { SiInteractiondesignfoundation } from "react-icons/si";

const EditingServices = () => {
  return (
    <>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className='img-bg'>
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-2">
              <div className="col-6 text-size col-md-7 py-4">
                <h3 className='text-light'> Copyediting Services </h3>
                <p className="text-light fs-5">Are you looking for technical editing, proofreading, rewriting, addressing your review comments, and formatting?. Are you reworried that your English language and formatting issues stand as the barrier in getting your paper published? Are you looking for the professional editor to refine existing use of Language in your scientific, scholarly, technical or medical manuscript? Let your improved version of research paper speak your work!</p>
                <p className="text-light fs-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nam eaque. Architecto recusandae nesciunt ratione, saepe asperiores repellat accusamus veniam. </p>

                {/* Organization logo */}
                <div className="text-center text-warning my-5">
                  <SiInteractiondesignfoundation className='logo' />
                </div>

                <h3 className="text-light">Ph.D. (Doctorate of Philosophy or DPhil), DBA, DS/SD, DLit/DLitt/LitD, DD, DTh, DMus, DCL, Dissertation Mentoring or Writing Services</h3>
                <p className="text-light fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iusto velit impedit asperiores nam aspernatur corporis praesentium cum animi quos.</p>
                <p className="text-light fs-5">Lorem ipsum dolor sit amet consectetur.</p>
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
            <h2 className="text-light">Lorem ipsum dolor sit amet consectetur.</h2>
            <p className="text-light"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellat reprehenderit quis ratione quo soluta minima distinctio eaque nisi cumque assumenda sequi ex aperiam quasi alias, optio suscipit porro non rem tempore illum magnam officia. Saepe voluptatem excepturi ducimus quisquam natus aspernatur eligendi, adipisci repellat ipsam explicabo sapiente est nobis beatae. Omnis impedit consequatur possimus provident. </p>
            <Link to='/' className="btn btn-outline-warning button"> Place an Order </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="img-bg4 pb-4">
          <div className="row row-cols-2">
            <div className="col-md-5 text-size">
              <div className="container ms-3 bg-secondary opacity-75 py-3 mt-5 mb-5">
                <h4 className='text-light'> Why do you need to choose Us for your Research Project Services? </h4>
                <p className="text-light"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, autem incidunt eveniet sunt alias accusantium saepe enim maxime tempore adipisci doloribus. Minima numquam laudantium quasi voluptatum, alias facilis! Accusantium consectetur consequatur quo ratione pariatur esse. Vel facere id aspernatur quasi facilis maxime deserunt? Aut hic, officiis ratione vel saepe, quas maxime sequi qui, rerum tempore quibusdam ad neque mollitia corporis amet dicta odio ducimus vitae voluptate ut!  </p>
                <h3 className="text-light"> Come, join us and become a part of the fast-growing community of Ph.D. Research Scholars </h3>
              </div>
            </div>

            <div className="col-md-7 text-size">
              <div className="container bg-white pt-4 pb-3">
                <h2 className="text-warning text-center pb-1"> Writing a Ph.D. Dissertation can seem overwhelming </h2>
                <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis deleniti culpa laborum optio quod. Eveniet iure reprehenderit quisquam vel neque? Quia, quas sapiente repellat nobis voluptatibus molestiae quae vitae commodi dolor  unde dolorem, est necessitatibus laboriosam omnis eaque itaque voluptas at magni corporis velit? Ducimus necessitatibus debitis, porro eligendi veritatis sit veniam expedita et iste illum commodi odit voluptates vitae, voluptas impedit officia ex cupiditate temporibus harum?</p>
                <p className="text-dark"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto modi earum sint veniam, possimus quam quas eveniet! Eaque deserunt iure dolor optio natus repellat, facere facilis illo cum voluptatem itaque veniam voluptate aut repellendus atque dicta, perferendis rem nihil corporis ratione culpa. Pariatur autem dolorum officiis blanditiis eos impedit fuga ratione, provident deleniti tempora non enim assumenda, tempore aspernatur saepe sequi ipsa facere minus, eligendi quas earum dolores ut! Aliquid fuga quibusdam id hic laudantium debitis perferendis, numquam nam aut sint accusamus sed, consectetur excepturi porro! Dignissimos, molestias cumque! </p>

                <ul className='py-1'>
                  <li className="text-dark"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li className="text-dark"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                  <li className="text-dark"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                </ul>

                <h3 className="text-warning"> Our End-to-End Assistance </h3>
                <p className="text-dark py-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt inventore ducimus ipsam praesentium sapiente quasi eos? Aliquid nobis officia facere! Repellat corporis beatae, fuga facere rerum aliquam dolorum maiores ipsa accusamus. Ut dignissimos voluptates dolor cumque debitis unde dolorem aliquam ad asperiores ab dolores quisquam, doloremque pariatur, cupiditate amet laborum sint illum maxime impedit aspernatur. Pariatur, incidunt doloribus vero porro magnam, voluptatum natus quod numquam inventore officiis ex eveniet expedita officia, illo unde amet? Autem quas assumenda quo voluptatem odio, distinctio fuga soluta rerum. Velit quam ipsum sunt ad aperiam ex, unde nemo laudantium libero facilis nostrum amet maxime mollitia exercitationem nobis expedita dolorem praesentium dolor? Fugiat suscipit recusandae dolorum quo perferendis nemo incidunt aliquid odit reiciendis obcaecati. Molestiae illo recusandae asperiores. </p>

                <h2 className="text-warning"> Engaging expertise who have studied the topic would enhance your research - A Trusted Ph.D. Dissertation Support </h2>
                <p className="text-dark pt-3 pb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab excepturi vero voluptas ea deserunt ex optio impedit tempore, ipsum adipisci veniam? Alias, necessitatibus. Quaerat delectus dignissimos libero pariatur numquam similique, dolore ea aspernatur nulla possimus illum quos rem sint sunt impedit officia, laudantium voluptatum? Rerum deleniti itaque tempore consequuntur. Odit ad nostrum vel labore doloribus recusandae laborum? Debitis nam velit, at commodi enim amet molestiae nihil mollitia eum, architecto doloremque! Veritatis, iste eius, est explicabo maiores, animi in placeat dolor rerum hic doloribus aliquid magni. Possimus natus corporis animi laudantium dolore dolores blanditiis perspiciatis deserunt nemo, quod iste obcaecati vitae quas perferendis, delectus excepturi quisquam, exercitationem a illo? Perferendis numquam repellendus fuga eaque illo vel accusantium, nesciunt quasi nam quisquam enim, quis eligendi!</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-dark py-4 text-center">
          <h2 className="text-light"> How We Plan Your Research? </h2>
          <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ullam exercitationem eveniet aut, accusantium, expedita ipsa, deleniti eligendi quaerat voluptatibus sequi quo fuga?</p>
          <Link to='/OurExperts' className="btn btn-outline-warning button"> Our Experts </Link>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="img-bg2">
          <div className="row">
            <div className="col-md-6 ">
            </div>
            <div className="text-size col-md-6">
              <div className=" container bg-white py-3">

                <h2 className="text-warning text-center"> How We Articulate? </h2>
                <p className="text-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem natus delectus ratione quo maxime eveniet officia rerum laborum aliquid, perferendis at harum! Repellat, voluptates? Dignissimos, dolorem fugiat? Magnam delectus excepturi, dolor qui cum vel modi adipisci atque! Autem, dolorem. Vitae, eum ipsa ullam culpa commodi praesentium, quidem consequatur deleniti nisi vero quaerat, enim quas odit.</p>

                <p className="text-dark fw-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi.</p>

                <ul>
                  <li className="text-dark py-2">Lorem ipsum dolor sit amet.</li>
                  <li className="text-dark py-2">Lorem ipsum dolor sit amet.</li>
                  <li className="text-dark py-2">Lorem ipsum dolor sit amet.</li>
                  <li className="text-dark py-2">Lorem ipsum dolor sit amet.</li>
                  <li className="text-dark py-2">Lorem ipsum dolor sit amet.</li>
                  <li className="text-dark py-2">Lorem ipsum dolor sit amet.</li>
                  <li className="text-dark py-2">Lorem ipsum dolor sit amet.</li>
                  <li className="text-dark py-2">Lorem ipsum dolor sit amet.</li>
                  <li className="text-dark py-2">Lorem ipsum dolor sit amet.</li>
                  <li className="text-dark py-2">Lorem ipsum dolor sit amet.</li>
                </ul>

                <p className="text-dark fw-bold mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div >

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="img-bg5">
          <div className="row">
            <div className="text-size col-md-7 bg-white text-dark">
              <h2 className='my-4 text-warning text-center'> What areas Ph.D. Assistance will cover? </h2>
              <p className='ps-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tenetur et saepe?</p>
              <ul className='ps-5'>
                <li className="pt-4"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
                <li className="pt-1"> Lorem ipsum dolor sit amet. </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-dark py-4 text-center">
          <h2 className="text-light"> Our Exclusive Doctorate of Philosophy Dissertation Mentoring Services A One Stop Solution for all your Research Related Needs </h2>
          <p className="text-light"> Our Various Services</p>
          <Link to='/OurProcess' className="btn btn-outline-warning button"> Our Process </Link>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="img-bg6 pb-4">
          <div className="row">
            <div className="col-md-6">
            </div>

            <div className="col-md-6 text-size">
              <div className="container bg-white pt-4 pb-2">
                <h2 className="text-warning text-center pb-1"> A Ph.D. Dissertation / Thesis Mentoring Service features that helps to get the grade </h2>
                <p className="text-dark">Ph.D. Assistance help you to present the theoretical background, statement of the problem, alignment of specific objectives of the study with main objectives, language clarity, presentation of literature review, citation of source of information, indication of knowledge gaps, presentation of research design, description of the geographical area of the study, presentation of data generation procedures and tools, data analysis plan, presentation of findings, analysis and interpretation of the findings, discussion, summary of the study and conclusion and presentation of recommendations.</p>

                <h3 className="text-warning"> Research Design – Qualitative Vs. Quantitative </h3>
                <p className="text-dark py-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt inventore ducimus ipsam praesentium sapiente quasi eos? Aliquid nobis officia facere! Repellat corporis beatae, fuga facere rerum aliquam dolorum maiores ipsa accusamus. Ut dignissimos voluptates dolor cumque debitis unde dolorem aliquam ad asperiores ab dolores quisquam, doloremque pariatur, cupiditate amet laborum sint illum maxime impedit aspernatur. Pariatur, incidunt doloribus vero porro magnam, voluptatum natus quod numquam inventore officiis ex. dolorum quo perferendis nemo incidunt aliquid odit reiciendis obcaecati. Molestiae illo recusandae asperiores. </p>

                <h2 className="text-warning"> Your Choice of Primary Vs. Secondary or Mixed data collection </h2>
                <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab excepturi vero voluptas ea deserunt ex optio impedit tempore, ipsum adipisci veniam? Alias, necessitatibus. Quaerat delectus dignissimos libero pariatur numquam similique, dolore ea aspernatur nulla possimus illum quos rem sint sunt impedit officia, laudantium voluptatum? Rerum deleniti itaque tempore consequuntur. Odit ad nostrum vel labore doloribus recusandae laborum? Debitis nam velit, at commodi enim amet molestiae nihil </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-dark text-center pb-4">
          <h2 className="text-white pt-5"> What do You expect when your order for Ph.D. Thesis / Dissertation Assistance Service? </h2>
          <p className="text-white py-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt sunt id rerum fugiat repellat facilis! </p>
          <Link to='/' className="btn btn-outline-warning"> Our Guarantees </Link>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <div className="img-bg">
          <div className="row">
            <div className="col-md-6">
            </div>

            <div className="col-md-6 text-size">
              <div className="container bg-white pt-4 pb-2">
                <h2 className="text-warning text-center pb-1">Build Questionnaire or Interview at a Free of costs </h2>
                <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem ex deleniti numquam fuga, adipisci quo quis facilis, distinctio eligendi repellat assumenda dignissimos quod magni beatae iusto rerum inventore incidunt recusandae asperiores? Porro, itaque. Saepe a quia quas delectus, maxime, non, voluptas nam mollitia numquam possimus excepturi nobis eius cupiditate. Aspernatur molestiae nulla molestias rerum, voluptatum ullam soluta magni quaerat, sunt in asperiores amet quas! Obcaecati, deleniti?</p>

                <h3 className="text-warning"> Get your Primary Research Completed at an additional cost </h3>
                <p className="text-dark py-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nesciunt inventore ducimus ipsam praesentium sapiente quasi eos? Aliquid nobis officia facere! Repellat corporis beatae, fuga facere rerum aliquam dolorum maiores ipsa accusamus. Ut dignissimos voluptates dolor cumque debitis unde dolorem aliquam ad asperiores ab dolores quisquam, doloremque pariatur Molestiae illo recusandae asperiores. </p>

                <h2 className="text-warning"> Appendices or additional work at Free of Costs </h2>
                <p className="text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab excepturi vero voluptas ea deserunt ex optio impedit tempore, ipsum adipisci veniam? Alias, necessitatibus. Quaerat delectus dignissimos libero pariatur numquam similique, dolore ea aspernatur nulla possimus illum quos rem sint sunt impedit officia, laudantium voluptatum? Rerum deleniti itaque tempore consequuntur. Odit ad nostrum vel labore doloribus recusandae laborum? Debitis nam velit, at commodi enim amet molestiae nihil </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Client Testimony */}
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
      >
        <section className="testimony my-5">
          <div className="container text-center text-warning">
            <h2>Testimony</h2>
          </div>

          <div className="container-fluid my-4">
            <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride='carousel'>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>

              {/* First Slide */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container-fluid">
                    <div className="container text-center position-relative mt-4 mb-5 pb-4">
                      {/* Avatar Icon */}
                      <FcBusinessman style={{ width: '6rem', height: '9rem' }} />
                      <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odit quaerat at ducimus quos sunt, laudantium commodi debitis atque quod.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Slide */}
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="container text-center position-relative mt-4 mb-5 pb-4">
                      {/* Avatar Icon */}
                      <FcBusinesswoman style={{ width: '6rem', height: '9rem' }} />
                      <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga nisi dolore odit quas error officia temporibus animi autem voluptate.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Slide */}
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="container text-center position-relative mt-4 mb-5 pb-4">
                      {/* Avatar Icon */}
                      <FcBusinessman style={{ width: '6rem', height: '9rem' }} />
                      <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime cupiditate impedit recusandae amet soluta eos, fugiat facilis quo a.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fourth Slide */}
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="container text-center position-relative mt-4 mb-5 pb-4">
                      {/* Avatar Icon */}
                      <FcBusinesswoman style={{ width: '6rem', height: '9rem' }} />
                      <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime cupiditate impedit recusandae amet soluta eos, fugiat facilis quo a.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </motion.div>
    </>

  )
}

export default EditingServices