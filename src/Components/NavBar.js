import React from "react";
import logo from "../assets/logo.svg";
import Button from "./ButtonCustom";

export default function NavBar() {
  return (
    // nav bar start
    <nav className="fixed flex items-center justify-between h-[80px] w-full py-4 px-24 bg-[#13082a32] bg-opacity-5  backdrop-blur-[3px] z-10">

    {/* logo image */}
      <div className="flex items-center w-[180px]">
        <img src={logo} alt="Logo" className="" />        
    </div>
      {/* Links  */}
      <div className="flex items-center gap-4 space-x-4">
        <a href="/" >
          <p className="text-[#FFFFFF] font-normal hover:text-gray-300 text-[15px]">Home</p>
        </a>
        <a href="/discover" >
          <p className="text-[#FFFFFF] font-normal hover:text-gray-300 text-[15px]">Discover</p>
        </a>
        <a href="/marketplace active" >
         <p className="text-[#FFFFFF] font-normal hover:text-gray-300 text-[15px]">Marketplace</p> 
        </a>
        <a href="/creators" >
          <p className="text-[#FFFFFF] font-normal hover:text-gray-300 text-[15px]">Creators</p>
        </a>
        <a href="/community" >
          <p className="text-[#FFFFFF] font-normal hover:text-gray-300 text-[15px]">Community</p>
        </a>
      </div>

      {/* Button Connect wallet  */}
      <div className="flex items-center">
        <Button name="Connect Wallet" varient="text" />
      </div>
    </nav>
  );
}
