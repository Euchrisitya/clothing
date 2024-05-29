import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImage from './bgg.jpg'; // Import the background image

export const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalAmount = location.state?.totalAmount || 0;
  const [cardDetails, setCardDetails] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    address: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePayment = () => {
    const { cardHolderName, cardNumber, expiryDate, cvv, address } = cardDetails;

    if (cardHolderName === "" || cardNumber === "" || expiryDate === "" || cvv === "" || address === "") {
      alert("Please fill in all the details.");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(cardHolderName)) {
      alert("Please enter a valid card holder name.");
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

    if (!/^[A-Za-z0-9\s]+$/.test(address)) {
      alert("Please enter a valid address");
      return;
    }

    const paymentSuccess = true; // Simulating successful payment for demo
    if (paymentSuccess) {
      alert("Payment successful");
      navigate('/Home');
    } else {
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-black"
      style={{ backgroundImage: `url(${bgImage})` }} // Apply the background image
    >
      <header className="bg-purple-800 h-[12%] text-white py-4 flex justify-center items-center">
        <ul className="flex space-x-6">
          <Link to='/Home' className="home hover:bg-lightcoral hover:text-blue-600">HOME</Link>
          <Link to='/Contact' className="home hover:bg-lightcoral hover:text-blue-600">CONTACT US</Link>
          <Link to='/About' className="home hover:bg-lightcoral hover:text-blue-600">ABOUT US</Link>
          <Link to='/Payment' className="home hover:bg-lightcoral hover:text-blue-600">PAYMENT</Link>
          <Link to='/Login' className="home hover:bg-lightcoral hover:text-blue-600">LOGIN</Link>
        </ul>
      </header>

      <center className="my-8">
        <h1 id="name" className="text-fuchsia-600 text-5xl">K-PHORIA FASHION</h1>
      </center>

      <center>
        <form id="paymentForm" className="bg-white p-9 w-[40%] text-left rounded-lg shadow-md border border-gray-300">
          <table>
            <tbody>
              <tr>
                <td className="pr-4"><h3 className="text-xl">Card holder name*</h3></td>
                <td><input type="text" id="cardHolderName" name="cardHolderName" value={cardDetails.cardHolderName} onChange={handleInputChange} placeholder="Enter your Name" className="border-2 border-gray-300 rounded px-2 py-1" /></td>
              </tr>
              <tr className="my-4">
                <td className="pr-4"><h3 className="text-xl">Card number*</h3></td>
                <td><input type="text" id="cardNumber" name="cardNumber" value={cardDetails.cardNumber} onChange={handleInputChange} placeholder="Enter your Card number" className="border-2 border-gray-300 rounded px-2 py-1" /></td>
              </tr>
              <tr className="my-4">
                <td className="pr-4"><h3 className="text-xl">Expiry date</h3></td>
                <td><input type="month" id="expiryDate" name="expiryDate" value={cardDetails.expiryDate} onChange={handleInputChange} className="border-2 border-gray-300 rounded px-2 py-1" /></td>
              </tr>
              <tr className="my-4">
                <td className="pr-4"><h3 className="text-xl">CVV</h3></td>
                <td><input type="number" id="cvv" name="cvv" value={cardDetails.cvv} onChange={handleInputChange} placeholder="Enter CVV" className="border-2 border-gray-300 rounded px-2 py-1" /></td>
              </tr>
              <tr className="my-4">
                <td className="pr-4"><h3 className="text-xl">Address</h3></td>
                <td><textarea id="address" name="address" value={cardDetails.address} onChange={handleInputChange} placeholder="Enter your Address" className="border-2 border-gray-300 rounded px-2 py-1 w-full" rows="4"></textarea></td>
              </tr>
              <tr>
                <td className="pr-4"><h3 className="text-xl">Total Amount</h3></td>
                <td><input type="text" value={`₹${totalAmount}`} readOnly className="border-2 border-gray-300 rounded px-2 py-1" /></td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="text-center mt-4">
          <button id="payButton" onClick={handlePayment} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">PAY</button>
        </div>
      </center>
      <footer className="bg-amber-200 mt-8 mb-15 p-5 text-center">
        <h4>Contact</h4>
        <h4>+91 7744556699</h4>
        <h4>chingufashion@gmail.com</h4>
      </footer>
    </div>
  );
};
