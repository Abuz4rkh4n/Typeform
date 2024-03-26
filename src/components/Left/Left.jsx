import React from "react";
import Picture from "../../assets/picture-1.png";

const Left = () => {
  return (
    <div className="hidden flex-col items-center justify-center h-screen lg:flex lg:w-45% bg-my-black">
      <div>
        <h1 className="font-lato text-white text-4xl text-center mb-8">
          Sign up <br /> and come on in
        </h1>
        <img width={366} src={Picture} alt="Select a font" />
      </div>
      <h4 className="font-lato text-white text-sm absolute bottom-10">
        © Typeform
      </h4>
    </div>
  );
};

export default Left;
