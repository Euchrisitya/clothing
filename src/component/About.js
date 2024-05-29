import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from './bgg.jpg'; // Import the background image

export const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-black"
      style={{ backgroundImage: `url(${bgImage})` }} // Apply the background image
    >
      <header className="bg-purple-800 h-[100px] text-white py-4 flex justify-center items-center">
        <nav>
          <ul className="flex space-x-6">
            <Link to="/Home" className="home hover:bg-lightcoral hover:text-blue-600">
              HOME
            </Link>
            <Link to="/Contact" className="home hover:bg-lightcoral hover:text-blue-600">
              CONTACT US
            </Link>
            <Link to="/About" className="home hover:bg-lightcoral hover:text-blue-600">
              ABOUT US
            </Link>
            <Link to="/Payment" className="home hover:bg-lightcoral hover:text-blue-600">
              PAYMENT
            </Link>
            <Link to="/Login" className="home hover:bg-lightcoral hover:text-blue-600">
              LOGIN
            </Link>
          </ul>
        </nav>
      </header>
      <main className="text-center p-10">
        <h1 id="name" className="text-fuchsia-600 text-5xl">
          K-PHORIA FASHION
        </h1>
        <section className="mt-10">
          <h2 id="who" className="text-rose-600 underline-offset-auto		 text-4xl font-bold">
            WHO WE ARE
          </h2>
          <p className="text-xl mt-5">
            We are a couple from Germany and together since we were 15 years old and K-Culture fans since 2013.
            Meantime we are both 23 years old and still love Korean Pop Culture. We are big fans of BigBang, BTS, and other iconic Kpop groups.
            We also enjoyed the Kdramas “I hear your voice”, “Goblin” and “W” a lot (still waiting for the day we get to see Quebec).
          </p>
        </section>
        <section className="mt-10">
          <h2 id="who" className="text-rose-600	 text-4xl font-bold">
            How we got to K-PHORIA FASHION
          </h2>
          <p className=" text-xl mt-5">
            As everyone knows Korean Pop-Culture is embossed through beautiful and stylish outfits and while watching all this pretty idols and actors wearing such awesome outfits we started to desire to look like them.
          </p>
          <p className="text-xl mt-5 font-bold">
            That was the start of a very looooong Google Search
          </p>
          <p className="text-xl mt-5">
            Someday, I wanted to buy a jacket from a Red Velvet MV. So I started my research for the outfit I wanted.
            Often I found the original designer pieces, but as you know Kpop idols and Kdrama actors don’t wear cheap things.
            The jacket I wanted to buy cost around 2000rs. I was desperate since I obviously don’t have the money to spend 2000rs on a jacket.
            While Pouting, I searched for a jacket which is similar to the one I want to have.
            After I tried this process for other pieces I realized that there is absolutely no shop which sells the stuff I want to have,
            since I always had to search for 3 days till I found something similar.
          </p>
        </section>
      </main>
    </div>
  );
};
