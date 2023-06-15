import React from "react";
import cardIcon from "../assets/cardIcon.svg";

export default function Card(props) {
  return (
    // 1st
    <div className="">
      <div className="rounded-[25px] overflow-hidden shadow-lg max-w-sm  bg-black">
        <div className="w-full h-[250px]  border-[6px] rounded-[25px] border-black  ">
          <img
            src={props.image}
            alt="gun1"
            className="w-full h-full rounded-[25px] container"
          />
        </div>

        <div className="px-2 py-4">
          <div className="font-bold text-2xl mb-2 flex justify-center text-white ">
            <p
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundImage:
                  "linear-gradient(96.39deg, #1C1C1C -9.54%, #FFFFFF 49.6%, #303030 105.26%)",
              }}
            >
              GunName
            </p>{" "}
          </div>
          <p className="text-gray-400 text-[12px] text-center mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,{" "}
          </p>
          <div className="flex justify-center gap-3 mt-8">
            <p className="text-white text-xl font-semibold" style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundImage:
                  "linear-gradient(96.39deg, #1C1C1C -9.54%, #FFFFFF 49.6%, #303030 105.26%)",
              }}>33</p>
            <img src={cardIcon} alt="cardIcon" className="h-5 w-5 mt-[5px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
