import React, {Fragment, useState} from "react";
// import axios from "axios";
import {Link} from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',

  });

  const {email, password} = formData;
  const onChange = e =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
    console.log('success')
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"/> Sign into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Login"/>
      </form>
      <div className="my-1">
        Dont have an account? <Link to="/register">Sign Up</Link>
      </div>
    </Fragment>

  )
};

export default Login
