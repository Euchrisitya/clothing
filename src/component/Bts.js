import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import layoverImg from './lay.jpg'; // Adjust the import paths as necessary
import purpleHoodieImg from './over.jpg';
import whiteHoodieImg from './white.jpg';
import tshirtImg from './vvv.jpg';
import yoonImg from './yoon.jpg';
import agustImg from './agust.jpg';
import dayImg from './dayy.jpg';
import blackImg from './black.jpg';
import sevenImg from './seven.jpg';
import sevImg from './sev.jpg';
import whiImg from './whi.jpg';
import sevblImg from './sevbl.jpg';
import kookImg from './kook.jpg';
import minImg from './min.jpg';
import jiImg from './ji.jpg';
import taeImg from './tae.jpg';
import btssImg from './btss.jpg';
import jiminImg from './jimin.jpg';
import namImg from './nam.jpg';
import jinImg from './jin.jpg';
import bgImage from './bgg.jpg'; // Import the background image


export const Bts = () => {
  const navigate = useNavigate();
  
  const handleBuyClick = (price) => {
    navigate('/Payment', { state: { totalAmount: price } });
  };


  return (
    
<div
      className="min-h-screen bg-cover bg-center text-black"
      style={{ backgroundImage: `url(${bgImage})` }} // Apply the background image
    >         
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
          <h1 className="text-firebrick text-4xl">BTS</h1>
          <h1 className="text-firebrick text-4xl">LAYOVER</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product
            imgSrc={layoverImg}
            description="LAYOVER NUDE COLOR HOODIE"
            price={3999}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={purpleHoodieImg}
            description="LAYOVER PURPLE COLOR HOODIE"
            price={3999}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={whiteHoodieImg}
            description="LAYOVER WHITE COLOR HOODIE"
            price={3999}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={tshirtImg}
            description="LAYOVER T-SHIRT"
            price={2999}
            onBuyClick={handleBuyClick}
          />
        </div>

        <div className="text-center mt-20 mb-10">
          <h1 className="text-firebrick text-4xl">AGUST-D</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={yoonImg} 
          description="SUGA HOODIE(white)"
          price={4999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={agustImg}
          description="AGUST-D T-SHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={dayImg} 
          description="D-DAY SWEATSHIRT"
          price={3499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={blackImg} 
          description="AGUST-D T-SHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />
        </div>

        <div className="text-center mt-20 mb-10">
          <h1 className="text-firebrick text-4xl">SEVEN</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={sevenImg} 
          description="SEVEN WHITE HOODIE"
          price={3999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={sevImg} 
          description="SEVEN BLACK T-SHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={whiImg}
          description="SEVEN WHITE T-SHIRT"
          price={2999}          
          onBuyClick={handleBuyClick} />

          <Product imgSrc={sevblImg}
          description="SEVEN BLACK HOODIE"
          price={3999}
          onBuyClick={handleBuyClick} />
        </div>

        <div className="text-center mt-20 mb-10">
          <h1 className="text-firebrick text-4xl">T-SHIRTS</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={kookImg}
          description="JUNGKOOK PRINTED T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={minImg} 
          description="SUGA PRINTED T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={jiImg}
          description="JIMIN PRINTED T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={taeImg} 
          description="TAEHYUNG PRINTED T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={btssImg}
          description="BTS PRINTED T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={jiminImg} 
          description="JIMIN PRINTED T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={namImg} 
          description="NAMJOON PRINTED SWEATSHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={jinImg}
          description="SEOKJIN PRINTED SWEATSHIRT"
          price={2999}
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
