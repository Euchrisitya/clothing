import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import layoverImg from './at.jpg'; // Adjust the import paths as necessary
import purpleHoodieImg from './atbl.jpg';
import whiteHoodieImg from './ate.jpg';
import tshirtImg from './atho.jpeg';
import yoonImg from './choi.jpg';
import agustImg from './san.jpg';
import dayImg from './woo.jpg';
import blackImg from './hoodie.jpg';
import sevenImg from './cjoisan.jpg';
import sevImg from './eong.jpg';
import whiImg from './hoodie.jpg';
import sevblImg from './jongo.jpg';
import kookImg from './jung.jpg';
import minImg from './kim.jpg';
import jiImg from './sweat.jpeg';
import taeImg from './yunho.jpg';
import btssImg from './gi.jpg';
import jiminImg from './hwa.jpg';
import namImg from './tshi.jpg';
import jinImg from './hea.jpg';

export const Ateez = () => {
  const navigate = useNavigate();
  

  const handleBuyClick = (price) => {
    navigate('/Payment', { state: { totalAmount: price } });
  };

  return (
    <div className="bg-purple-200	 w-full h-[2600px]	 text-black">
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
          <h1 className="text-firebrick text-4xl">ATEEZ</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product
            imgSrc={layoverImg}
            description="ATEEZ GREY T-SHIRT"
            price={3999}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={purpleHoodieImg}
            description="ATEEZ GROUP T-SHIRT"
            price={3999}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={whiteHoodieImg}
            description="ATEEZ SWEATSHIRT"
            price={3999}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={tshirtImg}
            description="ATEEZ HOODIE"
            price={2999}
            onBuyClick={handleBuyClick}
          />
        </div>

        <div className="text-center mt-20 mb-10">
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={yoonImg} 
          description="JONGHO SWEATSHIRT"
          price={4999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={agustImg}
          description="SAN SWEATSHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={dayImg} 
          description="WOOYOUNG SWEATSHIRT"
          price={3499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={blackImg} 
          description="ATEEZ HOODIE"
          price={2999}
          onBuyClick={handleBuyClick} />
        </div>

        <div className="text-center mt-20 mb-10">
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={sevenImg} 
          description="CHOI SAN T-SHIRT"
          price={3999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={sevImg} 
          description="YUNHO SWEATSHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={whiImg}
          description="ATEEZ HOODIE"
          price={2999}        
          onBuyClick={handleBuyClick} />

          <Product imgSrc={sevblImg}
          description="JONGHO WHITE T-SHIRT "
          price={3999}
          onBuyClick={handleBuyClick} />
        </div>

        <div className="text-center mt-20 mb-10">
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={kookImg}
          description="WOOYOUNG SWEATSHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={minImg} 
          description="HONGJOONG SWEATSHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={jiImg}
          description="ATEEZ SWEATSHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={taeImg} 
          description="YUNHO T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={btssImg}
          description="MINGI T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={jiminImg} 
          description="SEONGHWA SWEATSHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={namImg} 
          description="ATEEZ T-SHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={jinImg}
          description="ATEEZ HEART HOODIE"
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

