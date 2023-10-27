import React, { useState } from "react";
import Heading from "../Heading";
import { Outlet } from "react-router-dom";



function WordAssociation() {


  const [showInfo, setShowInfo] = useState(false);

  const handleInstruction = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <div className="px-20 py-5 flex flex-col relative items-center h-[100%] justify-start bg-white">
      <Heading
        headingName="word association test"
        iconName="circle-info"
        handleInstruction={handleInstruction}
      />
      <div className="flex flex-wrap justify-center  mb-16 w-[70%] gap-x-4">
        <Outlet />
      </div>
      {/* MOdal For Instruction */}
      <div
        className={`w-full flex items-center justify-center bg-black/70  fixed top-0 bottom-0 left-0 right-0 ${showInfo ? "h-[100vh] z-[999]" : "z-[-999] translate-x-full"
          } `}
      >
        <div className="p-6 bg-white rounded-md  max-w-[90%] lg:max-w-[50%]">
          <i
            onClick={handleInstruction}
            className="cursor-pointer px-2 py-1 w-fit float-right hover:rotate-180 duration-200 text-sky-800 hover:bg-sky-700 hover:text-white rounded-sm text-2xl  fa-solid fa-xmark"
          ></i>
          <h1 className="capitalize text-3xl font-bold text-sky-900">Instructions</h1>
          {/* Instruction list */}
          <ul className="px-10 text-sky-900 font-bold mt-2" style={{ listStyleType: "disc" }}>
            <li>Each set contains 60 different words.</li>
            <li>Each word will displayed on screen for 15 seconds.</li>
            <li>After every 15 seconds there will be a beep sound indicating that new word is being displayed.</li>
            <li>You have to write any sentence including that word.</li>
            <li>The dispalyed word can be used in different form as well. Example: "Agree" can be used as "Agreed" or "Agreement" etc in your sentence.</li>
            <li>Test will be over once all the 60 words have been displayed.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WordAssociation;
