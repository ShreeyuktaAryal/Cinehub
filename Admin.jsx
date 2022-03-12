import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
async function loginUser(credentials) {
  return fetch("http://localhost:3001/api/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
    window.location.href = '/';
  };
  return (
    <>
      <div className="container">
        <div className="row p-4">
          <div className="col-md-3"></div>
          <div className="card col-md-6 p-5">
            <div className="">
              <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
