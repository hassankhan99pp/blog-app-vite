import React, { useEffect, useState } from 'react'
import Form from './Form';
import { useParams,useNavigate } from 'react-router-dom';

function Edit() {
  const [data,setData] = useState({})
  const {blogid} = useParams()

   let getBlog = async function (){
    const response = await fetch(`http://localhost:8000/blogs/${blogid}`)
    console.log(response)
    const data = await response.json()
    setData(data)
    
  } 
 useEffect(()=>{

      getBlog()
  },[])

  let nav = useNavigate()

  
    let updateBlog = async (event)=>{
      event.preventDefault();
      await fetch(`http://localhost:8000/blogs/${blogid}`,{
        method:"PATCH",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      });
  
      nav('/')
  
    }
    
            

  return (
    // <Form
    //   headerText={"Edit Your Own Blog"}
    //   buttonText={"Update Blog"}
    //   btnClass={"btn-primary"}
    // ></Form>
    <div className="container">
      <div
        className="row justify-content-center align-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <h3>Edit Your Own Blog</h3>
            </div>
            <div className="card-body">
              <form
                onSubmit={function (e) {
                  updateBlog(e);
                }}
              >
                <input
                  defaultValue={data.title}
                  className="form-control my-2"
                  type="text"
                  placeholder="Enter Your Title"
                  onChange={function (e) {
                    setData({ ...data, title: e.target.value });
                  }}
                />
                <textarea
                  defaultValue={data.description}
                  className="form-control my-2"
                  name=""
                  id=""
                  rows={15}
                  placeholder="Enter Your Description"
                  onChange={function (e) {
                    setData({ ...data, description: e.target.value });
                  }}
                  ></textarea>
                <input
                  defaultValue={data.author}
                  className="form-control my-2"
                  type="text"
                  placeholder="Enter Your Author"
                  onChange={function (e) {
                    setData({ ...data, author: e.target.value });
                  }}
                />
                <input
                  className={"btn btn-primary w-100"}
                  type="submit"
                  value={"Update blog"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit