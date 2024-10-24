import logo from './logo.png';
import './App.css';
import React, { useState } from 'react';
import SHA256 from 'crypto-js/sha256';
import { Link, Outlet } from 'react-router-dom';

function App() {
    function makeActive(e) {
        document.querySelectorAll('.nav-link').forEach(link => { link.classList.remove('active'); })

        const element = e.target;
        element.classList.add('active');
    }

    return (
        <div>
            <header>
                <div className="container mt-4 mb-4">
                    <div className="d-flex justify-content-between align-items-center gap-3">
                        <div className="d-flex justify-content-start align-items-center gap-3">
                            <img src={logo} alt="logo" style={{ width: "15%" }} />
                            <h3 className="fw-bold">
                                SOUTH AUSTRALIA POLICE<br />
                                <span className="fs-5">SAFER COMMUNITIES</span>
                            </h3>
                        </div>
                        <div className="fw-bold fs-4">MPDC Location Search Tool</div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#6196b0" }} data-bs-theme="dark" >
                    <div className="container-fluid justify-content-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center fs-5 gap-4">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Dashboard" onClick={makeActive}>MPDC Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Dashboard/Report" onClick={makeActive}>Report</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <Outlet />
        </div>
    );
}

export default App;
