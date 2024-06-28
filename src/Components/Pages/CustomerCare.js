import React from 'react';

const CustomerCare = () => {
  return (
    <>
      <div className="container">
        <div className=" mx-5">
          <h3 className="text-warning py-3"><b> Customer Centre </b></h3>
          <p className="text-secondary"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut amet sit error, repellat accusamus quae reprehenderit suscipit, non saepe placeat debitis ipsum a officia quisquam quos in ducimus eligendi. Ducimus molestias similique odio ad id deleniti nesciunt quos laboriosam, animi ipsum? Cumque qui at porro a in officiis vel beatae voluptatem illo ipsum, accusantium dignissimos aut? </p>
          <p className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis similique nostrum sapiente mollitia perferendis laboriosam quod, fugit ducimus, animi nam iure et. </p>

          <h3 className="text-warning py-2"> Step 1 </h3>
          <div className="container bg-body-tertiary">
            <h3 className="text-warning pt-1"> Queries / Feedback / Complaints </h3>
            <hr className="border border-2 border-warning opacity-75 ms-0" />
            <p className="text-dark my-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente et animi sunt voluptate ex, nam </p>
            <ul style={{ listStyleType: 'none' }}>
              <li> <a href="mailto:" className='text-warning'> Email Us </a></li>
              <li> <a href="tel:+911234567890" className='text-warning'> Call Us </a></li>
            </ul>
            <hr className="border border-1 border-warning opacity-75" />
            <p className="mt-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim. </p>
            <ul style={{ listStyleType: 'none' }}>
              <li className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi. </li>
            </ul>
            <hr className="border border-4 border-warning opacity-100" />
          </div>

          <h3 className="text-warning py-2 my-5"> Step 2 </h3>
          <div className="container bg-body-tertiary">
            <h3 className='text-warning pt-1'> Grievance Redressal </h3>
            <hr className="border border-2 border-warning opacity-75" />
            <p className="text-dark pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis facilis dolore velit, tempora odit? Mollitia tempore commodi a impedit minima! Consequatur, ut? Dignissimos. </p>
            <ul style={{ listStyleType: 'none' }}>
              <li> <a href="mailto:" className='text-warning'> Email Us</a></li>
            </ul>
            <hr className="border border-2 border-warning opacity-75" />

            <p className="text-dark"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <ul>
              <li className="text-secondary">Lorem ipsum dolor sit amet consectetur.</li>
            </ul>

            <hr className="border border-4 border-warning opacity-100" />
          </div>

          <div className='mt-5 py-2 px-4 bg-body-tertiary-subtle' style={{boxSizing:'border-box', boxShadow: '2px 2px 3px 0.3px rgba(0, 0, 0, .6)'}}>
            <p className="text-warning py-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul>
              <li className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerCare