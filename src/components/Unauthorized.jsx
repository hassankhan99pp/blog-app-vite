// import React from 'react'

// export default function Unauthorized() {
//   return (
//     <div>Unauthorized</div>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';

export default function Unauthorized() {
  return (
    <div className="text-center mt-5">
      <h1 className="text-danger">403 - Unauthorized</h1>
      <p>You do not have permission to view this page.</p>
      <Link to="/login" className="btn btn-primary mt-3">
        Go to Login
      </Link>
    </div>
  );
}