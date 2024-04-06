import React from "react";
import ImageTextCard from "../../components/ImageTextCard";
import { FaHandcuffs, FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaHeadSideVirus, FaUser, FaUserCircle } from "react-icons/fa";

const Testimonies = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex flex-col items-center justify-center pt-20">
        <p className="text-base font-semibold pb-5">Testimonies</p>
        <h1 className="text-4xl font-semibold w-1/2 text-center m-0">
          Top inspiring stories for you
        </h1>

        <div className="flex pt-20 pb-16 gap-4 px-20">
          <ImageTextCard
            userName="Lisa Cynthia"
            icon={
              <FaUserCircle
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            Learn how Lisa, a cancer survivor, founded a nonprofit to support cancer patients and their families.
            Her kindness and compassion spread hope to those in need.
          </ImageTextCard>
          <ImageTextCard
            userName="John Doe"
            icon={
              <FaUserCircle
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            Read about John, who helped a stranded motorist on a rainy night,
            restoring their faith in humanity with a simple act of kindness..
          </ImageTextCard>
          <ImageTextCard
            userName="Emily Doe"
            icon={
              <FaUserCircle
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            Follow Emily's journey from homelessness to success.
            Despite obstacles, she worked through college and became an entrepreneur and advocate for the homeless.
          </ImageTextCard>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
