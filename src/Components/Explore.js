import React from "react";
import Card from "./Card";

// hardcoded wepon/character
import wepon1 from "../assets/Wepons/wepon1.png";
import wepon2 from "../assets/Wepons/wepon2.png";
import wepon3 from "../assets/Wepons/wepon3.png";
import wepon4 from "../assets/Wepons/wepon4.png";
// import wepon5 from "../assets/Wepons/wepon5.png";
// import wepon6 from "../assets/Wepons/wepon6.png";

import character1 from "../assets/Characters/character1.jpg";
import character2 from "../assets/Characters/character2.jpg";
import character3 from "../assets/Characters/character3.jpg";
import character4 from "../assets/Characters/character4.jpg";
// import character5 from "../assets/Characters/character5.jpg";
// import character6 from "../assets/Characters/character6.jpg";
// import character7 from "../assets/Characters/character7.jpg";
// import character8 from "../assets/Characters/character8.jpg";
// import character9 from "../assets/Characters/character9.jpg";
// import character10 from "../assets/Characters/character10.jpg";
// import character11 from "../assets/Characters/character11.jpg";

export default function Explore() {
  const weponAddress = [
      wepon1,
      wepon2,
      wepon3,
      wepon4, 
      // wepon5,
      // wepon6
  ];
  const characterAddress = [
    character1,
    character2,
    character3,
    character4,
    // character5,
    // character6,
    // character7,
    // character8,
    // character9,
    // character10,
    // character11,
  ];

  return (
    <>
      <div className=" mt-20">
        <div className="flex justify-center  mb-5">
          <p className="font-bold text-white text-[55px] ">Explore Weapons</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-14 justify-items-center mt-20">
          {weponAddress.map((gun, index) => {
            return (
              <div key={index}>
                <Card image={gun} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[10rem] pb-10">
        <div className="flex justify-center ">
          <p className="font-bold text-white text-[55px] ">
            Explore Characters
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-14 justify-items-center mt-20">
          {characterAddress.map((character, index) => {
            return (
              <div key={index}>
                <Card image={character} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
