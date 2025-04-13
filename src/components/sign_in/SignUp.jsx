import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {signUpThunk as singUp} from '../../redux/slices/user'

const SignUpPage = () => {
  const dispatch = useDispatch()
  // State to hold form values
  const currentContext = useSelector((state)=> state.currentContext)
  const user = useSelector((data)=> data.user)
  const [formData, setFormData] = useState(user);

  // State to hold validation errors
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fillDummyDetails = (e)=>{
    e.preventDefault()
    setFormData((prevData)=>{
      return {
        ...prevData,
        firstName: 'Morgan',
        lastName: 'Stanley',
        email: 'aryanz7027@gmail.com',
        password: 'welcome@123',
      }
    })
  }

  // Simple validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    // If no errors, proceed with form submission (for example, send to an API)
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted', formData);
      // Here you can make an API call to submit the form data
    }
    dispatch(singUp(formData))
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center my-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>
            <div className='d-flex gap-2'>
              <button type="submit" className="btn btn-primary w-100" disabled={user.pending}>
                {user.pending ? (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  'Sign Up'
                )}
              </button>
              <button className="btn btn-secondary w-50" disabled={user.pending} onClick={fillDummyDetails}>
                Fill Dummy Details
              </button>
            </div>
           { user.isLoggedIn && <Navigate to="/dashboard" state={{na:'test'}} replace={true} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
