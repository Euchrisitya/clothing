import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Payment = () => {
  const navigate = useNavigate();

    const handlePayment = () => {
        const cardHolderName = document.getElementById("cardHolderName").value;
        const cardNumber = document.getElementById("cardNumber").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;
    
        if (cardHolderName === "" || cardNumber === "" || expiryDate === "" || cvv === "") {
          alert("Please fill in all the details.");
          return;
        }
        if (!/^[A-Za-z\s]+$/.test(cardHolderName)) {
          alert("PLEASE ENTER A VALID CARD HOLDER NAME");
          return;
        }
    
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
          alert("Please enter a valid card number with 16 digits.");
          return;
        }
    
        if (cvv.length !== 3 || isNaN(cvv)) {
          alert("Please enter a valid CVV with 3 digits.");
          return;
        }
    
        const paymentSuccess = true;
        if (paymentSuccess) {
          alert("Payment successful");
          window.location.href = "pro.html";
        } else {
          alert("Payment failed. Please try again.");
        }
        navigate('/Home');
      };
    
    
      return (
        <div className="bg-purple-200	 w-full h-[2000px]	 text-black">
          <header className="bg-purple-800 h-[5%] text-white py-4 flex justify-center items-center">
            
          <ul className="flex space-x-6">
            <Link to='/Home' className="home hover:bg-lightcoral hover:text-blue-600">HOME</Link>
            <Link to='/Contact' className="home hover:bg-lightcoral hover:text-blue-600">CONTACT US</Link>
            <Link to='/About' className="home hover:bg-lightcoral hover:text-blue-600">ABOUT US</Link>
            <Link to='/Payment' className="home hover:bg-lightcoral hover:text-blue-600">PAYMENT</Link>
            <Link to='/Login' className="home hover:bg-lightcoral hover:text-blue-600">LOGIN</Link>

          </ul>
          </header>
    
          <center className="my-8">
          <h1 id="name" className="text-fuchsia-600	 text-5xl">K-PHORIA FASHION</h1>
          </center>
    
          <center>
            <form id="paymentForm" className="bg-white p-9 w-[40%] text-left rounded-lg shadow-md border border-gray-300">
              <table>
                <tbody>
                  <tr>
                    <td className="pr-4"><h3 className="text-xl">Card holder name*</h3></td>
                    <td><input type="text" id="cardHolderName" placeholder="Enter your Name" className="border-2 border-gray-300 rounded px-2 py-1" /></td>
                  </tr>
                  <tr className="my-4">
                    <td className="pr-4"><h3 className="text-xl">Card number*</h3></td>
                    <td><input type="text" id="cardNumber" placeholder="Enter your Card number" className="border-2 border-gray-300 rounded px-2 py-1" /></td>
                  </tr>
                  <tr className="my-4">
                    <td className="pr-4"><h3 className="text-xl">Expiry date</h3></td>
                    <td><input type="month" id="expiryDate" className="border-2 border-gray-300 rounded px-2 py-1" /></td>
                  </tr>
                  <tr className="my-4">
                    <td className="pr-4"><h3 className="text-xl">CVV</h3></td>
                    <td><input type="number" id="cvv" placeholder="Enter CVV" className="border-2 border-gray-300 rounded px-2 py-1" /></td>
                  </tr>
                </tbody>
                </table>
                </form>
                <div className="text-center mt-4">
            <button id="payButton" onClick={handlePayment} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">PAY</button>
          </div>
          </center>
             
            </div>
      );
    };