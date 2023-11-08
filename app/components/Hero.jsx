'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';


const Hero = () => {


    return ( 
        <section className="hero">
          <div className="container">
               <img
                  className="hero-image"
                  srcSet="images/mobile/image-interactive.jpg 654w, 
                        images/desktop/image-interactive.jpg 731w"
                  sizes="(max-width: 767px) 711px, 731px"
                  src="images/mobile/image-interactive.jpg"
                  alt="man having an interactive VR session"
               />

               <div className="hero-text">
                  <h2>The leader in interactive VR</h2>
                  <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
                  projects for some of the best companies around the globe. Our award-winning 
                  creations have transformed businesses through digital experiences that bind 
                  to their brand.</p>
               </div>
           </div>
        </section>
     );
}
 
export default Hero;