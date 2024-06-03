import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './CSS/LoginSignup.css';
import { ShopContext } from '../Context/ShopContext';

const LoginSignup = () => {
  const { url } = useContext(ShopContext);
  const [state, setState] = useState("Login");

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: state === "Sign Up" ? Yup.string().required('Username is required') : null,
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      if (state === "Login") {
        await login(values);
      } else {
        await signUp(values);
      }
    },
  });

  const login = async (formData) => {
    let dataObj;
    await fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => { dataObj = data; });
    console.log(dataObj);
    if (dataObj.success) {
      localStorage.setItem('auth-token', dataObj.token);
      window.location.replace("/");
    } else {
      alert(dataObj.errors);
    }
  };

  const signUp = async (formData) => {
    let dataObj;
    await fetch(`${url}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => { dataObj = data; });

    if (dataObj.success) {
      localStorage.setItem('auth-token', dataObj.token);
      window.location.replace("/");
    } else {
      alert(dataObj.errors);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className='loginsignup-fields'>
            {state === "Sign Up" && (
              <div>
                <input
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  placeholder='Your Name'
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="error">{formik.errors.username}</div>
                ) : null}
              </div>
            )}
            <div>
              <input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                placeholder='Your Email'
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <input
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                placeholder='Your Password'
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
          <button type="submit">Continue</button>
        </form>
        {state === "Sign Up" ? (
          <p className='loginsignup-login'>
            Already have an account? <span onClick={() => setState("Login")}>Login Here</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Create an account? <span onClick={() => setState("Sign Up")}>Click Here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
