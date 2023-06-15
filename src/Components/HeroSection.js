import React from "react";
import ButtonCustom from "./ButtonCustom";
import heroRightImage from "../assets/heroRightImage.svg";
import ethereum from "../assets/ethereum.svg";
import underline from "../assets/underline.svg";
import { Button } from "@mui/material";

export default function HeroSection() {
  return (
    // main start

    <div className="flex pt-[145px] h-screen  ">
      {/* Col 1 */}
      <div className="flex flex-col w-[60%]  h-[307px] ">
        {/* Go Pro......Guns And Goodies */}
        <div className="pb-5">
          <div className="h-[59px]">
            <h1 className="font-bold text-white text-[60px] ">Go Pro With</h1>
          </div>
          <div className="h-[59px]">
            <h1 className="font-bold  text-white text-[60px]">
              Exclusive
              <span className="text-[#FE45FE] relative">
                {" "}
                Ozirus{" "}
                <img
                  src={underline}
                  alt=""
                  className="absolute left-6 top-[68px]"
                />
              </span>
            </h1>
          </div>

          <div className="h-[59px]">
            <h1 className="font-bold  text-white text-[60px]">
              Guns And Goodies.
            </h1>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------- */}

        <div className="my-6">
          <p className=" text-[#9F8FC1] text-[18px]">
            Discover the power of <spna className="font-bold">Ozirus</spna> for
            a unique digital experience.
          </p>
        </div>

        <div className="flex gap-4 mt-7">
          <div>
            <ButtonCustom name="Explore" varients="text" />
          </div>
          <div>
            <Button
              variant="outlined"
              sx={{
                color: "#7879F1",
                borderRadius: "32px",
                height: "45px",
                width: "180px",
                border: "2px solid #7879F1"
              }}
            >
              <p className="font-medium text-[15px] ">Download Game</p>
            </Button>
          </div>
        </div>

        <div className="flex gap-5 h-[75px] mt-28 pb-5 ">
          <div className="flex flex-col items-center justify-center border-r border-[#FFFFFF] mb-4  pr-8">
            <p className="font-bold text-[30px] text-[#FE45FE]">10K</p>
            <p className="m-0 font-[400] text-[11px] text-white ">Artwork</p>
          </div>
          <div className="flex flex-col items-center justify-center border-r border-[#FFFFFF] mb-4 pr-8">
            <p className="font-bold text-[30px] text-[#FE45FE]">32K</p>
            <p className="m-0 font-[400] text-[11px] text-white ">Auction</p>
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            <p className="font-bold text-[30px] text-[#FE45FE]">42K</p>
            <p className="m-0 font-[400] text-[11px] text-white ">Artist</p>
          </div>
        </div>
      </div>
      {/* -------------------Col1 End------------------------------------------------------- */}

      {/* Col 2 */}

      {/* HeroImage*/}
      <div className="flex flex-col w-[40%]  ">
        <div className="">
          <picture>
            <img src={heroRightImage} alt="" className="" />
          </picture>
        </div>
        
        {/* Hero Image relateve Etherium */}
        <div className="relative">
          <div className="absolute bottom-[-35px] left-[20px] flex flex-col gap-2 h-[130px] w-[175px]  justify-center items-center bg-gradient-to-br from-gray-500  rounded-[25px] ">
            <p className="text-white text-base font-medium ">GunName</p>
            <p className="flex gap-1 text-white text-sm font-medium ">
              <img src={ethereum} alt="ethereumImg" />
              329.009 ETH
            </p>
            <Button
              variant="text"
              sx={{
                background: "#9E009E",
                color: "white",
                borderRadius: "32px",
                height: "40px",
                width: "7rem",
              }}
            >
              <p className="font-light text-sm">Buy Now!</p>
            </Button>
          </div>
        </div>
      </div>
      {/* -----------------------Col2 end----------------------------------------------- */}
    </div>
  );
}
