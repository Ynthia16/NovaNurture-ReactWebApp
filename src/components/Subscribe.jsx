import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-secondaryDark flex flex-col items-center justify-center py-10 mt-28">
      <div className="max-w-[1200px] flex flex-col justify-center items-center  gap-8">
        <p className=" text-white  m-0 flex flex-col gap-8 text-center items-center">
          <h1 className="text-4xl font-semibold m-0 ">Join our Newsletter</h1>
          <p
            className="text-base w-[76%]  
          "
          >
            Stay inspired and informed with NovaNurture's newsletter.
            Join our community for exclusive updates and inspiring content.
            Subscribe now to start your journey towards growth and positivity!
          </p>
        </p>
        <div className="border rounded-2xl w-[56%] h-10 pl-5 flex">
          <input
            type="text"
            className="bg-transparent h-full flex-1 focus:outline-none text-white placeholder:text-gray-300"
            placeholder="Subscribe to our newsletter"
          />
          <button className="px-10 h-full bg-lightGreen rounded-r-2xl font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
