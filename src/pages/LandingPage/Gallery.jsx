import React from "react";
import Whale from "../../assets/grey-whale-8563340_1280.png";
import Ocean from "../../assets/ocean-8408693_1280.jpg";
import Elif from "../../assets/elif.jpg";
import Baek from "../../assets/pexels-eunjin-baek-20696167.jpg";
import Semmer from "../../assets/pexels-finn-semmer.jpg";
import Igra from "../../assets/pexels-igra-11379269.jpg";
import Starry from "../../assets/starry-sky-8041247_1280 (1).jpg";
import Woman from "../../assets/woman-8643502_1280.png";

const Gallery = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-20 max-h-screen">
      <div className="flex justify-between">
        <div className="w-3/6">
          <p className="text-base font-semibold pb-5">Gallery</p>
          <h1 className="text-4xl font-semibold m-0">
            Start with refreshing images today
          </h1>
        </div>
        <p className="w-2/6 text-base self-center">
          Discover tranquility in our gallery of beauty. Explore stunning landscapes and serene vistas that captivate the senses. Lose yourself in nature's embrace as you find moments of peace and rejuvenation.
        </p>
      </div>

      {/* images */}

      <div className="grid grid-cols-4 gap-4 py-10 h-min ">
        <img src={Whale} alt="" className="object-cover h-[35vh] w-full rounded-xl" />
        <img src={Baek} alt="" className="object-cover h-[35vh] w-full object-center rounded-xl"  />
        <img src={Semmer} alt="" className="object-cover h-[35vh] w-full object-center rounded-xl"  />
        <img src={Elif} alt="" className="object-cover h-[35vh] w-full object-center rounded-xl"  />
        <img src={Ocean} alt="" className="object-cover h-[35vh] w-full object-center self-start rounded-xl"  />
        <img src={Woman} alt="" className="object-cover h-[35vh] w-full object-center rounded-xl"  />
        <img src={Igra} alt="" className="object-cover h-[35vh] w-full object-center rounded-xl"  />
        <img src={Starry} alt="" className="object-cover h-[35vh] w-full object-center rounded-xl"  />
      </div>
    </div>
  );
};

export default Gallery;
