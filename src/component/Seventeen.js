import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import layoverImg from './tote.jpg'; // Adjust the import paths as necessary
import purpleHoodieImg from './teen.jpg';
import whiteHoodieImg from './bss.jpg';
import tshirtImg from './chain.jpg';
import yoonImg from './vernon.jpg';
import agustImg from './niceblue.jpg';
import dayImg from './nice.jpg';
import blackImg from './nicepink.jpg';
import sevenImg from './sevho.jpg';
import sevImg from './stripe.jpg';
import whiImg from './blstri.jpg';
import sevblImg from './wallet.jpg';
import bgImage from './bgg.jpg'; // Import the background image


export const Seventeen = () => {
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
          <h1 className="text-firebrick text-4xl">SEVENTEEN</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product
            imgSrc={layoverImg}
            description="SEVENTEEN T-SHIRT  "
            price={3999}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={purpleHoodieImg}
            description="SEVENTEEN T-SHIRT"
            price={3999}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={whiteHoodieImg}
            description="BSS HOODIE"
            price={3999}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={tshirtImg}
            description="SEVENTEEN CHAIN"
            price={2999}
            onBuyClick={handleBuyClick}
          />
        </div>

        <div className="text-center mt-20 mb-10">
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={yoonImg} 
          description="VERNON T-SHIRT"
          price={4999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={agustImg}
          description="AJU NICE BLUE SWEATSHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={dayImg} 
          description="AJU NICE BLACK SWEATSHIRT"
          price={3499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={blackImg} 
          description="AJU NICE PINK SWEATSHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />
        </div>

        <div className="text-center mt-20 mb-10">
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={sevenImg} 
          description="SEVENTEEN HOODIE"
          price={3999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={sevImg} 
          description="SEVENTEEN BLACK HOODIE"
          price={2999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={whiImg}
          description="SEVENTEEN HOODIE"
          price={2999}          
          onBuyClick={handleBuyClick} />

          <Product imgSrc={sevblImg}
          description="SEVENTEEN WALLET"
          price={3999}
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

