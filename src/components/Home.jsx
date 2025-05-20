import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// let count = 0

function Home() {
  
  // let data = [] //conventional
  
  const [blogs,setBlogs]=useState([]) //state
  
  const getBlogs = async ()=>{
    
    let response  = await fetch("http://localhost:8000/blogs");
    if(!response.ok){
      throw 'Error'
    }
    let data = await response.json()
    setBlogs(data)
    
  }
  
  useEffect(()=>{
    
    // console.log(count++)
    getBlogs()

  },[])

  let copyArr = blogs.map((blog) => (
          <div key={blog.id} className="col-md-10 my-2">
            <div className="card">
              <div className="card-header bg-dark text-light">
                <h4>{blog.title}</h4>
              </div>
              <div className="card-body">
                <h4>{blog.title}</h4>
                <p>Written By {blog.author}</p>
                <Link to={`/view/${blog.id}`} className='btn btn-primary'>Read More...</Link>
              </div>
            </div>
          </div>))
          console.log("arr",blogs)
          console.log("copy",copyArr)

    
  return (
    <div className="container my-5" style={{ minHeight: "100vh" }}>
      <div className="row justify-content-center">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-10 my-2">
            <div className="card">
              <div className="card-header bg-dark text-light">
                <h4>{blog.title}</h4>
              </div>
              <div className="card-body">
                <h4>{blog.title}</h4>
                <p>Written By {blog.author}</p>
                <Link to={`/view/${blog.id}`} className='btn btn-primary'>Read More...</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home