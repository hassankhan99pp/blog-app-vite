import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <section className="container-fluid mx-0 px-0">
      <div className="row g-0">
        <div className="col-md-2 bg-dark" style={{ minHeight: "100vh" }}>
          <ul>
            <li className="my-3">
              <NavLink to={"/admin/"}>Home</NavLink>
            </li>
            <li className="my-3">
              <NavLink to={"/admin/bloglist"}>Blog List</NavLink>
            </li>
            <li className="my-3">
              <NavLink to={"/admin/authorlist"}>Author List</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-10 border border-danger">
          <Nav />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-11">
                  <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
