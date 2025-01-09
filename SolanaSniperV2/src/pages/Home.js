import React, { useState, useEffect } from 'react';
import Card from '../pages/Card.js';
import '../assets/css/utility.min.css'
import '../styles/gun.css'
import '../styles/preloader.css'
const Home = () => {
const [loading, setLoading] = useState(true);
const [showWipeForward, setShowWipeForward] = useState(false);
const [showWipeReverse, setShowWipeReverse] = useState(false);
const [solPrice, setSolPrice] = useState(null);
const [preloaderVisible] = useState(true);
const [showRotatingLoader, setShowRotatingLoader] = useState(true); // Control rotating loader visibility
const [preloaderHidden, setPreloaderHidden] = useState(false);


const PRICES_USD = {
telegramMonthly: 250,
loyalistWeekly: 82,
loyalistMonthly: 330
};
useEffect(() => {
const fetchSolPrice = async () => {
try {
const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
const data = await response.json();
setSolPrice(data.solana.usd);
} catch (error) {
console.error('Error fetching SOL price:', error);
}
};
fetchSolPrice();
const interval = setInterval(fetchSolPrice, 300000);
return () => clearInterval(interval);
}, []);
const calculateSolPrice = (usdPrice) => {
if (!solPrice) return null;
const solAmount = usdPrice / solPrice;
return solAmount.toFixed(2);
};

// Calculate all dynamic prices
const prices = {
telegramMonthly: calculateSolPrice(PRICES_USD.telegramMonthly) || "Loading...",
loyalistWeekly: calculateSolPrice(PRICES_USD.loyalistWeekly) || "Loading...",
loyalistMonthly: calculateSolPrice(PRICES_USD.loyalistMonthly) || "Loading..."
};
const handleScroll = (e) => {
e.preventDefault();
const targetSection = document.querySelector('#target-section');
if (targetSection) {
targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
};
useEffect(() => {
  if (loading) {
    // Force scroll to top and disable browser scroll restoration
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For older browsers

    // Continuously ensure the scroll position stays at the top
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('scroll', scrollToTop);

    // Prevent scrolling
    document.body.classList.add('no-scroll');

    return () => {
      // Remove scroll listener when loading is done
      window.removeEventListener('scroll', scrollToTop);
      document.body.classList.remove('no-scroll');
    };
  }
}, [loading]);
useEffect(() => {
const startAnimations = setTimeout(() => {
setShowRotatingLoader(false); // Hide rotating loader
setShowWipeForward(true); // Start forward wipe
setTimeout(() => {
setShowWipeForward(false); // End forward wipe
setShowWipeReverse(true); // Start reverse wipe
setTimeout(() => {
setPreloaderHidden(true); // Hide preloader
setShowWipeReverse(false); // End reverse wipe
setLoading(false); // Show the actual site content
}, 2000); // Reverse animation duration
}, 1000); // Forward animation duration
}, 2000); // Preloader duration
return () => clearTimeout(startAnimations);
}, []);
//4010
return (
<>
{/* Preloader with Rotating Loader and Wipe Animation */}
{preloaderVisible && (
<div className={`preloader ${preloaderHidden ? 'hidden' : ''}`}>
{/* Rotating Loader */}
{!showWipeForward && !showWipeReverse && showRotatingLoader &&(
<div className="close-container rotating">
   <span className="cross-line top-left"></span>
   <span className="cross-line top-right"></span>
   <span className="cross-line bottom-left"></span>
   <span className="cross-line bottom-right"></span>
</div>
)}
{/* Wipe Animation */}
<div
className={`animation-wipe ${
showWipeForward ? 'show' : showWipeReverse ? 'top' : ''
}`}
>
<span className="box-1"></span>
<span className="box-2"></span>
</div>
{/* Frame of the Website */}
{showWipeReverse &&(
<div
   className="logo-frame absolute top-0 left-0 w-full h-full flex items-center justify-center "
   >
   <img
   src="/logotransparent.png" // Update the path to your logo image
   alt="Logo"
   className="h-125 w-auto" // Adjust the size of the logo
   />           
   {/* Add simple static content as the "frame" */}
</div>
)}
</div>
)}
{/* Actual Site Content */}
{  (
<div
   id="site-content"
   className="content bg-black bg-[url('assets/images/common/hexagons.svg')] relative visible"
   >
   <main>
      <nav>
         <ul>
            <li>
               <a>
               Home
               </a>
            </li>
            <li>
               <a>
               About
               </a>
            </li>
            <li>
               <a>
               Services
               </a>
            </li>
            <li>
               <a>
               Contact
               </a>
            </li>
         </ul>
      </nav>
      {/* Hero Section */}
      <div id="contents-wrap">
         <section
         className="section banner min-h-screen flex justify-center items-center relative [@media(min-width:769px)]:-mt-[83px]" id="banner"
         style={{ opacity: 1, transform: "translate(0px, 0vh)", willChange: "transform" }}
         >
         <div class="video w-full h-full absolute top-0 left-0 overflow-hidden z-0 transotion-opacity pointer-events-none bg-before">
            <video
               className="top-0 left-0 w-full h-full object-cover"
               src="/6916389_Motion Graphics_Motion Graphic_1920x1080.mp4"
               autoPlay
               muted
               loop
               playsInline
               ></video>
         </div>
         <div
  className={`container flex flex-col`}>

    
         <img
         
            className="logo slide-up"
            style={{ animationDelay: "5.5s"}}
            src="/logotransparent.png"
            alt="SOL Sniper Bot" />
         <div style={{ animationDelay: "6.3s" }} className="fancy-heading relative max-w-full text-center slide-up">
            <h1 class="fh-element relative mb-0/15em leading-1em" data-text-rotator="true" data-split-text="true" data-split-options="{&quot;type&quot;: &quot;chars, words&quot;}">
               <span class="font-accent">Solana Snipers</span>
            </h1>
         </div>
         <div   style={{ animationDelay: "6.6s" }} class="fancy-heading relative text-center px-15percent slide-up">
            <p class="fh-element1 relative mb-0/5em leading-1/3em">🏹🎯Unleash the full potential of your Solana projects with Solana Snipers. We offer a comprehensive suite of automation tools tailored to streamline development, boost visibility, and provide real-time insights within the Solana ecosystem.🤖📈</p>
         </div>
         <div  style={{ animationDelay: "6.9s" }} class="flex flex-row flex-wrap justify-center mt-10 p-10 slide-up">
            <div class="flex flex-col flex-md-row justify-center gap-10 max-w-full">
               <div className="close-container" onClick={handleScroll}>
                  <a href="#target-section">
                  <span class="cross-line top-left"></span>
                  <span class="cross-line top-right"></span>
                  <span class="cross-line bottom-left"></span>
                  <span class="cross-line bottom-right"></span>
                  </a>
               </div>
            </div>
         </div>
        </div>
      </section>
      <section id="target-section">
         <div className="bob h-32 bg-gradient-to-b from-black to-transparent"></div>
         {/* Tools Grid */}
         <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-center">
               {/* Telegram Sniper Card */}
               <Card className="custom-card flex flex-col h-full group">
                  <div className="p-6 flex flex-col h-full">
                     {/* Header Section */}
                     <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                           Telegram Sniper
                        </h2>
                        <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-200">
                           <svg
                              className="w-4 h-4 text-purple-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M13 10V3L4 14h7v7l9-11h-7z"
                                 />
                           </svg>
                        </div>
                     </div>
                     {/* Features Section */}
                     <ul className="mt-4 space-y-2 flex-grow">
                        {[
                        'Be the first to snipe Telegram Channel Calls Every Time',
                        'Target multiple Public/Private Telegram channels simultaneously',
                        'Customizable filters to snipe only the best tokens',
                        ].map((feature, index) => (
                        <li
                           key={index}
                           className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-200"
                           >
                           <svg
                              className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M5 13l4 4L19 7"
                                 />
                           </svg>
                           {feature}
                        </li>
                        ))}
                     </ul>
                     {/* Footer Section: Links and Pricing */}
                     <div className="mt-6 space-y-2">
                        {/* Link */}
                        <a
                           href="https://solanasnipers.mysellix.io/pay/2ffd2a-9536048a0a-0a4d53"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 text-center transform hover:scale-[1.02] hover:shadow-lg"
                           >
                        Buy Now
                        </a>
                        {/* Price Information */}
                        <div className="flex flex-col space-y-1">
                           <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                           Monthly Access
                           </span>
                           <span className="text-lg font-bold text-white hover:text-yellow-400 transition-colors duration-200">
                           {prices.telegramMonthly} SOL
                           {solPrice && (
                           <span className="text-sm text-gray-400 ml-2">
                           (Varies with market)
                           </span>
                           )}
                           </span>
                        </div>
                        <div className="flex flex-col space-y-1">
                           <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                           Lifetime Access
                           </span>
                           <span className="text-lg font-bold text-white hover:text-yellow-400 transition-colors duration-200">
                           25 SOL
                           </span>
                        </div>
                     </div>
                  </div>
               </Card>
               {/* Loyalist Alpha Group Card */}
               <Card className="custom-card flex flex-col h-full group">
                  <div className="p-6 flex flex-col h-full">
                     <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                           Loyalist Alpha Group
                        </h2>
                        <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-200">
                           <svg
                              className="w-4 h-4 text-purple-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                 />
                           </svg>
                        </div>
                     </div>
                     <ul className="mt-4 space-y-2 flex-grow">
                        {['Multiple Alpha Call Sections for you to profit from',
                        'Telegram Sniper Bot Access included for Loyalist Members',
                        'Futures Section: Dive deep into Solana futures',
                        'Multiple Tools available for members'].map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-200">
                           <svg className="w-4 h-4 mr-2 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                           </svg>
                           {feature}
                        </li>
                        ))}
                     </ul>
                     <div className="mt-6 space-y-2">
                        <a href="https://loyalists.mysellix.io/pay/c434f7-97c924194e-8d4b27"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 text-center transform hover:scale-[1.02] hover:shadow-lg">
                        Join Now
                        </a>
                        <div className="flex flex-col space-y-1">
                           <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">Weekly Access</span>
                           <span className="text-lg font-bold text-white hover:text-yellow-400 transition-colors duration-200">
                           {prices.loyalistWeekly} SOL
                           {solPrice && (
                           <span className="text-sm text-gray-400 ml-2">(Varies with market)</span>
                           )}
                           </span>
                        </div>
                     </div>
                  </div>
               </Card>
               {/* DanBump Volume Bot Card */}
               <Card className="custom-card flex flex-col h-full group">
                  <div className="p-6 flex flex-col h-full">
                     <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">DanBump Volume Bot</h2>
                        <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-200">
                           <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                           </svg>
                        </div>
                     </div>
                     <p className="mt-4 text-gray-300 flex-grow group-hover:text-gray-200 transition-colors duration-200">
                        Dantheman's custom Bumpbot / Volume Bot.
                     </p>
                     <div className="mt-6 space-y-2">
                        <a href="https://t.me/DamBumpBot"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 text-center transform hover:scale-[1.02] hover:shadow-lg">
                        Start Bumping
                        </a>
                        <div className="flex flex-col space-y-1">
                           <span className="text-lg font-bold text-white hover:text-yellow-400 transition-colors duration-200">FREE</span>
                        </div>
                     </div>
                  </div>
               </Card>
               {/* Stalk.fun Card */}
               <Card className="card">
                  <div className="p-6 flex flex-col h-full">
                     <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">Stalk.fun Alpha Dashboard</h2>
                        <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-200">
                           <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                           </svg>
                        </div>
                     </div>
                     <p className="mt-4 text-gray-300 flex-grow group-hover:text-gray-200 transition-colors duration-200">
                        Monitor the entire memecoin market for the latest alpha tokens.
                     </p>
                     <div className="mt-6 space-y-2">
                        <a href="https://stalk.fun"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="block w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 text-center transform hover:scale-[1.02] hover:shadow-lg">
                        Start Stalking
                        </a>
                        <div className="flex flex-col space-y-1">
                           <span className="text-lg font-bold text-white hover:text-yellow-400 transition-colors duration-200">0.5 SOL</span>
                        </div>
                     </div>
                  </div>
               </Card>
            </div>
         </div>
      </section>
</div>
</main>
</div>
)}
</>
);
};
export default Home;