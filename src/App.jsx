import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AdminHome from "./components/admin/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import View from "./components/View";
import AdminLayout from "./components/admin/Layout";
import Layout from "./components/Layout";
import BlogList from "./components/admin/BlogList";
import AuthorList from "./components/admin/AuthorList";
import Login from "./components/Login";
import Auth from "./components/Auth";
import Unauthorized from "./components/Unauthorized";

function App() {

  let isAuth = false

  return (
    <>
      <Routes>
        {/* public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="edit/:blogid" element={<Edit />} />
          <Route path="view/:blogid" element={<View />} />
          <Route path="login" element={<Login />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          {/* <Route path="create" element={<Create />} /> */}
        </Route>

        {/* protected */}
        <Route element={<Auth allowedRole={"admin"}/>}>

          <Route path="admin" element={<AdminLayout />}>
              <Route index  element={<AdminHome></AdminHome>}></Route>
              <Route path="bloglist" element={<BlogList/>}></Route>
              <Route path="authorlist" element={<AuthorList/>} ></Route>
          </Route>

        </Route>
        <Route element={<Auth allowedRole={"author"}/>}>

          <Route path="author" element={<AdminLayout />}>
              <Route index  element={<AdminHome></AdminHome>}></Route>
              <Route path="bloglist" element={<BlogList/>}>
                <Route path="edit" element={<BlogList/>}/>
                <Route path="view" element={<BlogList/>}/>
              
              </Route>
              <Route path="authorlist" element={<AuthorList/>} ></Route>
          </Route>

        </Route>


    
      </Routes>
    </>
  );
}

export default App;
