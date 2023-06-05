import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-xl py-0">
                    <div class="logo">
                        <a class="navbar-brand py-0 me-0" href="#"><img src="./assets/images/sasscandy-logo.svg" alt="logo"/></a>
                    </div>
                    <a class="d-inline-block d-lg-block d-xl-none d-xxl-none  nav-toggler text-decoration-none" data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                        <i class="ti ti-menu-2 text-warning"></i>
                    </a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">                                             
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <a class="nav-link text-capitalize" aria-current="page" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-capitalize" href="#">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-capitalize" href="#">Pricing </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-capitalize" href="#">Elements </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-capitalize" href="#">blog</a>
                                </li>
                            </ul>
                            <div class="d-flex align-items-center">
                                {/* <div class="input-group  search">
                                    <button class="btn border-0 p-0" type="button" id="button-addon1"><i class="ti ti-search text-white"></i></button>
                                    <input type="text" class="form-control border-0 bg-transparent ps-2" placeholder="search" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                </div> */}
                                <a class="btn btn-warning btn-hover-secondery text-capitalize " href="#">register</a>
                            </div>
                    </div>
                </nav>
    </div>
  )
}

export default navbar
