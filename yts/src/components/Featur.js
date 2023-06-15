import React from 'react'

const Featur = () => {
  return (
    <div className="container position-relative">
            <img src="./assets/images/service/dot-shape.png" alt='img' className="shape position-absolute"/>
            <div className="row">
                <div className="col-12"><small className="fs-7 d-block">Working Process</small></div>
                <div className="col-12 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-block d-block align-items-center justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-sm-center ">
                    <h2 className="fs-2 text-black mb-0">Our Featured Service<br/> that We Provide</h2>
                    <a href="#!" className="btn btn-warning btn-hover-secondery section-btn">All Services</a>
                </div>
            </div>
            <div className="row d-flex flex-wrap justify-content-center step-row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                                <i className="ti ti-download text-primary position-relative"></i>
                            </div>
                            <h5 className="mb-0 fw-500">Step 1</h5>
                            <h3 className="fs-4">Download our App</h3>
                            <p className="fs-7 mb-0 fw-500">There are many variations of pass for ages of oremsum.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                                <i className="ti ti-user text-primary position-relative"></i>
                            </div>
                            <h5 className="mb-0 fw-500">Step 2</h5>
                            <h3 className="fs-4">Create a free Account</h3>
                            <p className="fs-7 mb-0 fw-500">There are many variations of pass for ages of oremsum.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <div className="icon-round overflow-hidden rounded-circle position-relative d-flex align-items-center justify-content-center mx-auto text-center">
                                <i className="ti ti-gift text-primary position-relative"></i>
                            </div>
                            <h5 className="mb-0 fw-500">Step 3</h5>
                            <h3 className="fs-4">Now Start your Journey</h3>
                            <p className="fs-7 mb-0 fw-500">There are many variations of pass for ages of oremsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featur
