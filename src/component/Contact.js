import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Contact = () => {
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const message = event.target.message.value;

    if (!username || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Redirect to the home page after successful submission
    navigate('/Home');
  };

  return (
    <div className="bg-purple-200 w-full h-[900px] text-black">
      <header className="bg-purple-800 h-[11%] text-white py-4 flex justify-center items-center">
        
          <ul className="flex space-x-6">
            <Link to='/Home' className="home hover:bg-lightcoral hover:text-blue-600">HOME</Link>
            <Link to='/Contact' className="home hover:bg-lightcoral hover:text-blue-600">CONTACT US</Link>
            <Link to='/About' className="home hover:bg-lightcoral hover:text-blue-600">ABOUT US</Link>
            <Link to='/Payment' className="home hover:bg-lightcoral hover:text-blue-600">PAYMENT</Link>
            <Link to='/Login' className="home hover:bg-lightcoral hover:text-blue-600">LOGIN</Link>

          </ul>
        
      </header>
      <main className="text-center p-10">
        <h1 id="name" className="text-fuchsia-600 text-5xl">K-PHORIA FASHION</h1>
        <center>
        <form id="contactForm" className="bg-white p-9 w-[40%] text-left rounded-lg shadow-md border border-gray-300 mt-10" onSubmit={handleSubmit}>
          <table className="mx-auto">
            <tbody>
              <tr>
                <td className="p-2"><h3>Username*</h3></td>
                <td className="p-2"><h3><input type="text" name="username" placeholder="Enter your Username " className="p-2 border border-gray-300 rounded" /></h3></td>
              </tr>
              
              <tr>
                <td className="p-2"><h3>Your Message</h3></td>
                <td className="p-2"><h3><input type="text" name="message" placeholder="Type your message" className="p-2 border border-gray-300 rounded w-full" style={{ height: '100px' }} /></h3></td>
              </tr>
            </tbody>
          </table>
        
          <center><button id="btn1" className="mt-5 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">SUBMIT</button></center>
        </form>
        </center>
      </main>
    
      <footer className="bg-fuchsia-300	 p-5 text-center">
        <h4>Contact</h4>
        <h4>+91 7744556699</h4>
        <h4>chingufashion@gmail.com</h4>
      </footer>
    </div>
  );
};
