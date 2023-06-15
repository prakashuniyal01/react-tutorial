import React from 'react'

const Achivements = () => {
    return (
      <React.Fragment>
        <section className="portfolio position-relative bg-primary">
          <div className="row">
            <div className="col-12">
              <small className="fs-7 d-block text-warning">Product Docs</small>
            </div>
            <div className="col-12 d-xxl-flex d-xl-flex d-lg-flex d-md-flex d-sm-block d-block align-items-center justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-md-between justify-content-sm-between justify-content-sm-center ">
              <h2 className="fs-3 text-white mb-0">
                Beautiful Docs
                <br /> for your APIs.
              </h2>
              <a
                href="#!"
                className="btn btn-warning btn-hover-secondery section-btn"
              >
                Open Portfolio
              </a>
            </div>
          </div>
          <div className="row d-flex flex-wrap justify-content-center step-row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div className="icon mx-auto rounded-circle d-flex justify-content-center align-items-center">
                    <i className="ti ti-brand-github text-white"></i>
                  </div>
                  <h3 className="fs-4 text-white">Github Sync</h3>
                  <p className="fs-7 mb-0 fw-500">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div className="icon  mx-auto rounded-circle d-flex justify-content-center align-items-center">
                    <i className="ti ti-crown text-white"></i>
                  </div>
                  <h3 className="fs-4 text-white">Branding</h3>
                  <p className="fs-7 mb-0 fw-500">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center">
              <div className="card bg-transparent">
                <div className="card-body">
                  <div className="icon mx-auto rounded-circle d-flex justify-content-center align-items-center">
                    <i className="ti ti-message-circle-2 text-white"></i>
                  </div>
                  <h3 className="fs-4 text-white">Comments</h3>
                  <p className="fs-7 mb-0 fw-500">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
}

export default Achivements;
