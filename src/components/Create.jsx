import React, { useState } from 'react'
import Form from './Form'
import { useNavigate } from 'react-router-dom'

function Create() {

  const [data,setData] = useState({})
  
  let nav = useNavigate()
  console.log(data)

  let postBlog = async (event)=>{
    event.preventDefault();
    await fetch("http://localhost:8000/blogs",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    });

    nav('/')

  }
  

  return (
    <div>
      {/* <Form headerText={'Write Your Own Blog'} buttonText={"Create Blog"} btnClass={'btn-success'} ></Form> */}
      <div className="container">
        <div className="row justify-content-center align-content-center" style={{minHeight:"100vh"}}>
          <div className="col-md-10">
            <div className="card">
              <div className="card-header">
                <h3>Write Your Own Blog</h3>
              </div>
              <div className="card-body">
                <form onSubmit={function(e){postBlog(e)}}>
                  <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Enter Your Title"
                    onChange={function(e){setData({...data,title:e.target.value})}}
                    />
                  <textarea
                    className="form-control my-2"
                    name=""
                    id=""
                    rows={15}
                    placeholder="Enter Your Description"
                    
                    onChange={function(e){setData({...data,description:e.target.value})}}
                    ></textarea>
                  <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Enter Your Author"
                    onChange={function(e){setData({...data,author:e.target.value})}}
                  />
                  <input
                    className={"btn btn-success w-100"}
                    type="submit"
                    value={"create blog"}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create