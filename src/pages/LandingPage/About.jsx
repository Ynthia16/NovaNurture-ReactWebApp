import React from "react";
import ImageTextCard from "../../components/ImageTextCard";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaHandcuffs } from "react-icons/fa6";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className="flex flex-col items-center justify-center pt-24">
        <p className="text-base font-semibold pb-5">About</p>
        <h1 className="text-4xl font-semibold w-1/2 text-center m-0">
          Why Should NovaNurture be your Best Choice
        </h1>

        <div className="flex pt-16 pb-28 gap-4 px-16">
          <ImageTextCard
            title={"Discover Daily Inspiration"}
            icon={
              <FaHandcuffs
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            NovaNurture is your sanctuary for positivity and growth.
            Each day brings new affirmations, empowering stories, and chances for reflection. Join us on the journey toward personal fulfillment, where you can nourish your mind, body, and soul.
          </ImageTextCard>
          <ImageTextCard
            title={"Join a Supportive Community"}
            icon={
              <FaHeadSideVirus
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            NovaNurture offers a vibrant community of like-minded individuals.
            Share experiences, find support, and build genuine connections. Together, we inspire each other to embrace our potential and make meaningful changes in our lives and beyond.
          </ImageTextCard>
          <ImageTextCard
            title={"Customize Your Journey"}
            icon={
              <FaPersonWalkingLuggage
                size={100}
                color=""
                className="group-hover:text-white"
              />
            }
          >
            NovaNurture understands that everyone's path to wellness is unique.
            Our app offers customizable features like mood tracking and journaling. Tailor your experience to fit your needs and embark on a journey of self-discovery with us.
          </ImageTextCard>
        </div>
      </div>
    </div>
  );
};

export default About;
