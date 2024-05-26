import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Login= () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    if (email === '' || password === '') {
      alert('Please fill in all fields.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      navigate('/Home');
    }
  };

  return (
    <div className="bg-purple-200 w-full h-[2000px] text-black">
      <header className="bg-purple-800 h-[5%] text-white py-4 flex justify-center items-center">
        <ul className="flex space-x-6">
          <Link to='/Home' className="home hover:bg-lightcoral hover:text-blue-600">HOME</Link>
          <Link to='/Contact' className="home hover:bg-lightcoral hover:text-blue-600">CONTACT US</Link>
          <Link to='/About' className="home hover:bg-lightcoral hover:text-blue-600">ABOUT US</Link>
          <Link to='/Payment' className="home hover:bg-lightcoral hover:text-blue-600">PAYMENT</Link>
          <Link to='/Login' className="home hover:bg-lightcoral hover:text-blue-600">LOGIN</Link>
        </ul>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h1 className="text-fuchsia-600 text-5xl">K-PHORIA FASHION</h1>
        <form
          id="signUpForm"
          className="bg-white p-9 w-[40%] text-left rounded-lg shadow-md border border-gray-300"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              E-mail*
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">
              Password*
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <center>
          <button
            type="submit"
            id="btn1"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            LOGIN
          </button>
          </center>
          <div className="mt-4 text-center">
            <span>Have no account? </span>
            <Link to="/Sign" className="text-blue-600 hover:underline">Sign Up</Link>
          </div>
        </form>
      </main>
    </div>
  );
};