import './html/cards.css'
import './html/sidebars.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectLoginStatus} from "../auth";
import {useState} from "react";

export function Navbar() {
    const dispatch = useDispatch();
    const isLogged = useSelector(selectLoginStatus)

    return (<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark text-white"
                 aria-label="Eleventh navbar example">
            <div class="container">
                <Link to='/excursions' class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" viewBox="0 0 118 94">
                        <path fill-rule="evenodd" fill="white" clip-rule="evenodd"
                              d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
                    </svg>
                    <span class="navbar-brand ms-2">M.I.L.F</span>
                    <div class="vr d-none d-xl-block"></div>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample09"
                        aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarsExample09">
                    <ul class="navbar-nav mb-2 mb-lg-0  align-content-center">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to='/excursions'>Excursions</Link>
                        </li>
                        <div class="vr d-none d-lg-block"></div>
                        <li class="nav-item">
                            <Link class="nav-link" to='/gallery'>&#9794;Gallery&#9794;</Link>
                        </li>
                        <div class="vr d-none d-lg-block"></div>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown"
                               aria-expanded="false">About</a>
                            <ul class="dropdown-menu" aria-labelledby="dropdown09">
                                <li><Link class="dropdown-item" to='/about'>Info</Link></li>
                                <li><a class="dropdown-item" href="#">Contacts</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0  align-content-center">
                        <li>
                            <form class="col-12 col-sm-auto me-0 me-lg-2">
                                <input type="search" class="form-control form-control-dark" placeholder="Search..."
                                       aria-label="Search"/>
                            </form>
                        </li>
                        <li>
                            {isLogged ? <button type="button"
                                                onClick={() => dispatch(logout())}
                                                className="btn btn-outline-light col-12 col-lg-auto mt-2 mt-lg-0 me-2">Logout
                                </button>
                                : <button type="button"
                                          onClick={() => dispatch(login())}
                                          class="btn btn-outline-light col-12 col-lg-auto mt-2 mt-lg-0 me-2">Login
                                </button>}

                        </li>
                    </ul>

                </div>
            </div>

        </nav>
    )
}

export function Footer() {

    return (
        <div class="bg-dark">
            <div class="container">
                <footer
                    class="d-flex mb-0 bg-dark flex-wrap justify-content-evenly align-items-center py-3 my-4 border-top border-dark">
                    <p class="col-md-4 pe-2 mb-0 text-muted">&copy; 2021 Company, Inc</p>
                    <a href="#"
                       class="col-md-4 d-flex align-items-center justify-content-center mb-md-0 me-md-auto link-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" viewBox="0 0 118 94">
                            <path fill-rule="evenodd" fill="white" clip-rule="evenodd"
                                  d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>

                        </svg>
                    </a>
                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
                    </ul>
                </footer>
            </div>
        </div>)
}
