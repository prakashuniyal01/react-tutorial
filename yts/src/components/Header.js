import React from "react";
export const Header =() =>{
    return (
      <>
        <header class="main-header position-fixed w-100 sticky m-0">
          <div class="container">
            <nav class="navbar navbar-expand-xl py-0">
              <div class="logo">
                <a class="navbar-brand py-0 me-0" href="#!">
                  <img src="./assets/images/sasscandy-logo.svg" alt="img" />
                </a>
              </div>
              <a
                class="d-inline-block d-lg-block d-xl-none d-xxl-none  nav-toggler text-decoration-none"
                data-bs-toggle="offcanvas"
                href="#!offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <i class="ti ti-menu-2 text-warning"></i>
              </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                    <a
                      class="nav-link text-capitalize"
                      aria-current="page"
                      href="#!"
                    >
                      Services
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-capitalize" href="#!">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-capitalize" href="#!">
                      Pricing{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-capitalize" href="#!">
                      Elements{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-capitalize" href="#!">
                      blog
                    </a>
                  </li>
                </ul>
                <div class="d-flex align-items-center">
                  <div class="input-group  search">
                    <button
                      class="btn border-0 p-0"
                      type="button"
                      id="button-addon1"
                    >
                      <i class="ti ti-search text-white"></i>
                    </button>
                    {/* <input type="text" class="form-control border-0 bg-transparent ps-2" placeholder="search" aria-label="Example text with button addon" aria-describedby="button-addon1"> */}
                  </div>
                  <a
                    class="btn btn-warning btn-hover-secondery text-capitalize "
                    href="#!"
                  >
                    register
                  </a>
                </div>
              </div>
            </nav>
          </div>

          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <div class="logo">
                <a class="navbar-brand py-0 me-0" href="#!">
                  <img src="./assets/images/Creato-logo.svg" alt="img" />
                </a>
              </div>
              <button
                type="button"
                class="btn-close text-reset  ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i class="ti ti-x text-warning"></i>
              </button>
            </div>
            <div class="offcanvas-body pt-0">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link text-capitalize"
                    aria-current="page"
                    href="#!"
                  >
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-capitalize" href="#!">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-capitalize" href="#!">
                    Pricing{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-capitalize" href="#!">
                    Elements{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-capitalize" href="#!">
                    blog{" "}
                  </a>
                </li>
              </ul>
              <div class="login d-block align-items-center mt-3">
                <a class="btn btn-warning text-capitalize w-100" href="#!">
                  contact us
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* <div className="m-5">
          <Descover />
        </div> */}
      </>
    );
}