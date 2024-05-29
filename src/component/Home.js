import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bts from './bang.jpg';
import bp from './blpi.jpg';
import ateez from './atez.jpg';
import les from './les.jpg';
import seve from './seve.jpg';
import twi from './twi.jpg';
import layoverImg from './rosewhi.jpg';
import purpleHoodieImg from './lether.jpg';
import whiteHoodieImg from './yell.jpg';
import tshirtImg from './rm.jpg';


export const Home = () => {
  const navigate = useNavigate();
  

  const handleBuyClick = (price) => {
    navigate('/Payment', { state: { totalAmount: price } });
  };

  return (
    <div className="bg-purple-200 w-full h-[1650px] text-black">
      <header className="bg-purple-800 h-[6%] text-white py-4 flex justify-center items-center">
        <ul className="flex space-x-6">
          <Link to="/Home" className="home hover:bg-lightcoral hover:text-blue-600">HOME</Link>
          <Link to="/Contact" className="home hover:bg-lightcoral hover:text-blue-600">CONTACT US</Link>
          <Link to="/About" className="home hover:bg-lightcoral hover:text-blue-600">ABOUT US</Link>
          <Link to="/Payment" className="home hover:bg-lightcoral hover:text-blue-600">PAYMENT</Link>
          <Link to="/Login" className="home hover:bg-lightcoral hover:text-blue-600">LOGIN</Link>
        </ul>
      </header>

      <center className="my-8">
        <h1 id="name" className="text-fuchsia-600 text-5xl">K-PHORIA FASHION</h1>
      </center>

      <center className="my-8">
        <h1 className="text-fuchsia-700 text-4xl">K-POP FASHION</h1>
        <div className="flex justify-center space-x-4 my-8">
          <Link to='/Bts'>
            <img className="w-84 h-64 object-cover transition-transform duration-200 hover:scale-110" src={bts} alt="BTS" />
          </Link>
          <Link to='/Blackpinkk'>
            <img className="w-74 h-64 object-cover transition-transform duration-200 hover:scale-110" src={bp} alt="BLACKPINK" />
          </Link>
          <Link to='/Ateez'>
            <img className="w-79 h-64 object-cover transition-transform duration-200 hover:scale-110" src={ateez} alt="ATEEZ" />
          </Link>
        </div>
      </center>

      <center className="my-8">
        <h1 className="text-fuchsia-700 text-4xl">K-POP MERCH</h1>
        <div className="flex justify-center space-x-4 my-8">
          <Link to='/Lesserafim'>
            <img className="w-94 h-64 object-cover transition-transform duration-200 hover:scale-110" src={les} alt="LES" />
          </Link>
          <Link to='/Seventeen'>
            <img className="w-84 h-64 object-cover transition-transform duration-200 hover:scale-110" src={seve} alt="SEVENTEEN" />
          </Link>
          <Link to='/Twice'>
            <img className="w-89 h-64 object-cover transition-transform duration-200 hover:scale-110" src={twi} alt="TWICE" />
          </Link>
        </div>
      </center>

      <center className="my-8">
        <h1 id="name" className="text-fuchsia-600 text-5xl">NEW ARRIVALS</h1>
        <h3 id="name" className="text-blue-600 text-2xl">Check out new arrivals</h3>
      </center>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        <Product
          imgSrc={layoverImg}
          description="ROSE WHITE TIFFANY DRESS"
          price={20499}
          onBuyClick={handleBuyClick}
        />
        <Product
          imgSrc={purpleHoodieImg}
          description="I.N LEATHER JACKET"
          price={5999}
          onBuyClick={handleBuyClick}
        />
        <Product
          imgSrc={whiteHoodieImg}
          description="I.U YELLOW CO-ORD SET"
          price={3999}
          onBuyClick={handleBuyClick}
        />
        <Product
          imgSrc={tshirtImg}
          description="RM LOUIS VUITTON JACKET"
          price={3999}
          onBuyClick={handleBuyClick}
        />
      </div>

      <footer className="bg-fuchsia-300 mt-8 mb-10 p-5 text-center">
        <h4>Contact</h4>
        <h4>+91 7744556699</h4>
        <h4>chingufashion@gmail.com</h4>
      </footer>
    </div>
  );
}

const Product = ({ imgSrc, description, price, onBuyClick }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imgSrc} alt={description} className="w-full h-60 object-cover mb-4" />
      {description && <p className="text-center mb-2">{description}</p>}
      {price && <p className="text-center mb-4">₹{price}</p>}
      <button
        onClick={() => onBuyClick(price)}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        BUY
      </button>
    </div>
  );
};
