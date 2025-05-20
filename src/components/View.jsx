import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function View() {
  const { blogid } = useParams();
  const [blog, setBlog] = useState({});
  const nav =useNavigate()
  
  let getBlog = async function (){
    const response = await fetch(`http://localhost:8000/blogs/${blogid}`)
    console.log(response)
    const data = await response.json()
    setBlog(data)
    
  } 
  
  let deleteBlog = async()=>{
    const response = await fetch(`http://localhost:8000/blogs/${blogid}`,{method:"DELETE"})
    nav('/')
  }

  useEffect(()=>{

      getBlog()
  },[])

  
  return (
    <div className="container">
      <div className="row justify-content-center align-content-center" style={{minHeight:'100vh'}}>
        <div className="col-md-10">
          <div className="card">
            <div className="card-header bg-dark text-light">{blog?.title}</div>
            <div className="card-body">
              <p>{blog?.description}</p>
              <hr />
              <p>Written By{blog?.author}</p>
              <hr />
              <button className='btn btn-danger w-100 my-2' onClick={function(){deleteBlog()}}>Delete</button>
              <Link className='btn btn-primary w-100 my-2' to={`/edit/${blog.id}`} >Edit</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View