import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import layoverImg from './bl.jpg'; // Adjust the import paths as necessary
import purpleHoodieImg from './t.jpg';
import whiteHoodieImg from './heart.jpg';
import tshirtImg from './jen.jpg';
import yoonImg from './crop.jpg';
import agustImg from './crown.jpg';
import dayImg from './ice.jpg';
import blackImg from './pillow.jpg';
import sevenImg from './tour.jpg';
import sevImg from './square.jpg';
import whiImg from './lisa.jpg';
import sevblImg from './jennie.jpg';
import kookImg from './jisoo.jpg';
import minImg from './rose.jpg';
import jiImg from './yellow.jpg';
import taeImg from './gre.jpg';
import btssImg from './seat.jpg';
import jiminImg from './pink.jpg';
import namImg from './pinkk.jpg';
import jinImg from './blink.jpg';

export const Blackpinkk = () => {
  const navigate = useNavigate();
  

  const handleBuyClick = (price) => {
    navigate('/Payment', { state: { totalAmount: price } });
  };


  return (
    <div className="bg-purple-200	 w-full h-[2530px]	 text-black">
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
          <h1 className="text-firebrick text-4xl">BLACKPINK</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product
            imgSrc={layoverImg}
            description="BLACKPINK T-SHIRT"
            price={2499}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={purpleHoodieImg}
            description="BLACKPINK T-SHIRT"
            price={2499}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={whiteHoodieImg}
            description="BLACKPINK HOODIE"
            price={3999}
            onBuyClick={handleBuyClick}
          />
          <Product
            imgSrc={tshirtImg}
            description="BLACKPINK SIGNED T-SHIRT"
            price={3999}
            onBuyClick={handleBuyClick}
          />
        </div>

        <div className=" mt-20 mb-10">
</div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={yoonImg} 
          description="BLACKPINK CROP TOP"
          price={1999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={agustImg}
          description="BLACKPINK T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={dayImg} 
          description="ICE-CREAM T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={blackImg} 
          description="BLACKPINK PINK PILLOW"
          price={2999}
          onBuyClick={handleBuyClick} />
        </div>

        <div className=" mt-20 mb-10">
</div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={sevenImg} 
          description="BP TOUR T-SHIRT"
          price={3999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={sevImg} 
          description="BP T-SHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={whiImg}
          description="LISA PRINTED T-SHIRT"
          price={2999}        
          onBuyClick={handleBuyClick} />

          <Product imgSrc={sevblImg}
          description="JENNIE PRINTED T-SHIRT"
          price={3999}
          onBuyClick={handleBuyClick} />
        </div>

        <div className=" mt-20 mb-10">
</div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <Product imgSrc={kookImg}
          description="JISOO PRINTED T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={minImg} 
          description="ROSE PRINTED T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={jiImg}
          description="BLACKPINK PRINTED T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={taeImg} 
          description="BLACKPINK T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />


          <Product imgSrc={btssImg}
          description="BLACKPINK PRINTED T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={jiminImg} 
          description="PINK VENOM T-SHIRT"
          price={2499}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={namImg} 
          description="BP PRINTED SWEATSHIRT"
          price={2999}
          onBuyClick={handleBuyClick} />

          <Product imgSrc={jinImg}
          description="BP PRINTED T-SHIRT"
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