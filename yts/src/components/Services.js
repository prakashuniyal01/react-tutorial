import React from 'react'

const Services = () => {
  return (
    <div>
      <div classname="container">
            <div classname="row">
                <div classname="col-xxl-8 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <img src="./assets/images/our-service/our-service.svg" classname="img-fluid" alt='img'/> 
                </div>
                <div classname="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ps-xxl-0 ps-xl-0 ps-lg-3 ps-md-3 ps-sm-3 ps-3">
                    <small classname="fs-7 d-block">Our Service</small>
                    <h2 classname="fs-2 text-black mb-0">Our Featured Service that We Provide</h2>
                    <p classname="mb-0 fw-500 fs-7">
                        Seamlessly see the tasks that need your attention, check when your next meeting is coming up, and keep up with your progress.
                    </p>
                    <ul classname="list-unstyled mb-0 pl-0">
                        <li classname="d-flex flex-wrap align-items-start">
                            <i classname="ti ti-circle-check fs-4 pe-2"></i>
                            <span classname="fs-7 text-black">List of the tasks that require your attention.</span>
                        </li>
                        <li classname="d-flex flex-wrap align-items-start">
                            <i classname="ti ti-circle-check fs-4 pe-2"></i>
                            <span classname="fs-7 text-black">Google Calendar integration to see when interruptions will happen</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
