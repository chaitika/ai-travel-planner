//import React from 'react'
import { Button } from "../button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9 text-center">
      <h1>
        <span className="text-[#9B6A6C] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          WanderWise:
        </span>
        <br />
        <span className="text-[#e2b4bd] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Effortless Planning, Tailored Itineraries
        </span>
      </h1>
      <p className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Let AI Craft Your Perfect Journey!
      </p>

      <Link to = {'/create-trip'}>
        <Button>Get Started. It&apos free</Button>
      </Link>
    </div>
  );
}

export default Hero;
