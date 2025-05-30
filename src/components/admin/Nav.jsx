import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  let nav=useNavigate()
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <button onClick={()=>{localStorage.removeItem('token'); nav('/')}} className="nav-link" href="#">
                Log Out
              </button >
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
}
