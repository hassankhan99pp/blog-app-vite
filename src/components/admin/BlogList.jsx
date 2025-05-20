import React, { useEffect, useState } from "react";

export default function BlogList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {});
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Author</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((blog) => (
          <tr>
            <th scope="row">{blog.id}</th>
            <td>{blog.title}</td>
            <td>{blog.description}</td>
            <td>{blog.author}</td>
            <td>
                <button className="btn btn-danger d-inline">Delete</button>
                <button className="btn btn-secondary d-inline">edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
