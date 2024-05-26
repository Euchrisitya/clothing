import React from 'react';
import { Link } from 'react-router-dom';
import layoverImg from './twice.jpg'; // Adjust the import paths as necessary
import purpleHoodieImg from './tw.jpg';
import whiteHoodieImg from './tiw.jpg';
import tshirtImg from './twswe.jpg';
import yoonImg from './nayeon.jpg';
import agustImg from './sana.jpg';
import dayImg from './momo.jpg';
import blackImg from './chae.jpg';
import sevenImg from './tzuyu.jpg';
import sevImg from './bag.jpg';
import whiImg from './combo.jpg';
import sevblImg from './cup.jpg';


export const Lesserafim = () => {
  const handleBuyClick = () => {
    window.location.href = '/Payment';
  };

  return (
    <div className="bg-purple-200	 w-full h-[1650px]	 text-black">
          <header className="bg-purple-800 h-[5%] text-white py-4 flex justify-center items-center">
        
       
          <ul className="flex space-x-6">
            <Link to='/Home' className="home hover:bg-lightcoral hover:text-blue-600">HOME</Link>
            <Link to='/Contact' className="home hover:bg-lightcoral hover:text-blue-600">CONTACT US</Link>
            <Link to='/About' className="home hover:bg-lightcoral hover:text-blue-600">ABOUT US</Link>
            <Link to='/Payment' className="home hover:bg-lightcoral hover:text-blue-600">PAYMENT</Link>
            <Link to='/Login' className="home hover:bg-lightcoral hover:text-blue-600">LOGIN</Link>

          </ul>
        
      </header>

      <main className="p-10">
        <div className="text-center mb-10">
        <h1 className="text-fuchsia-600 text-5xl">K-PHORIA FASHION</h1>
          <h1 className="text-firebrick text-4xl">LESSERAFIM</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product
            imgSrc={layoverImg}
            description="LAYOVER NUDE COLOR HOODIE"
            price="RS.3999"
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={purpleHoodieImg}
            description="LAYOVER PURPLE COLOR HOODIE"
            price="RS.3999"
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={whiteHoodieImg}
            description="LAYOVER WHITE COLOR HOODIE"
            price="RS.3999"
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={tshirtImg}
            description="LAYOVER T-SHIRT"
            price="RS.2999"
            onBuyClick={handleBuyClick}
          />
        </div>

        <div className="text-center mt-20 mb-10">
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={yoonImg} 
          description="SUGA HOODIE(white)"
          price="Rs.4999"
          onBuyClick={handleBuyClick} />

          <Product imgSrc={agustImg}
          description="AGUST-D T-SHIRT"
          price="Rs.2999"
          onBuyClick={handleBuyClick} />

          <Product imgSrc={dayImg} 
          description="D-DAY SWEATSHIRT"
          price="Rs.3499"
          onBuyClick={handleBuyClick} />

          <Product imgSrc={blackImg} 
          description="AGUST-D T-SHIRT"
          price="Rs.2999"
          onBuyClick={handleBuyClick} />
        </div>

        <div className="text-center mt-20 mb-10">
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={sevenImg} 
          description="SEVEN WHITE HOODIE"
          price="Rs.3999"
          onBuyClick={handleBuyClick} />

          <Product imgSrc={sevImg} 
          description="SEVEN BLACK T-SHIRT"
          price="Rs.2999"
          onBuyClick={handleBuyClick} />

          <Product imgSrc={whiImg}
          description="SEVEN WHITE T-SHIRT"
          price="Rs.2999"          
          onBuyClick={handleBuyClick} />

          <Product imgSrc={sevblImg}
          description="SEVEN BLACK HOODIE"
          price="Rs.3999"
          onBuyClick={handleBuyClick} />
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/Home" className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500">
            BACK
          </Link>
        </div>
      </main>
    </div>
  );
};

const Product = ({ imgSrc, description, price, onBuyClick }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imgSrc} alt={description} className="w-full h-60 object-cover mb-4" />
      {description && <p className="text-center mb-2">{description}</p>}
      {price && <p className="text-center mb-4">{price}</p>}
      <button
        onClick={onBuyClick}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        BUY
      </button>
    </div>
  );
};

