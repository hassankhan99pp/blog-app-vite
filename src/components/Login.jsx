import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let nav = useNavigate("");
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.setItem("token", "gfjhdgfjdgfjsdgjglksdgjlsj");
          localStorage.setItem("role", "author");
          nav("/admin");
        }}
      >
        <input
          type="text"
          className="form-control my-2"
          placeholder="enter Email"
        />
        <input
          type="text"
          className="form-control my-2"
          placeholder="enter Password"
        />
        <input type="submit" className="btn btn-success" value={"Login"} />
      </form>
    </>
  );
}
