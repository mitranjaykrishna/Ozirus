import React from "react";
import page from "../assets/1.jpg";
import HeroSection from "./HeroSection";
import Explore from "./Explore";

export default function Home() {
  return (
    // main start
    <div
      className="bg-[url] w-full  bg-cover px-24"
      style={{ backgroundImage: `url(${page})` }}
    >
      <HeroSection />
      <Explore />

    </div>
  );
}
