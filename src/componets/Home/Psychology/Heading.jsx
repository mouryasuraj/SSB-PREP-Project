import React from "react";

function Heading({ headingName, iconName, handleInstruction}) {
  return (
    <div className="flex items-center gap-x-1 border-b-4 border-sky-600 w-fit" >
      <h1 className="uppercase pb-1 text-sky-600 font-extrabold  md:text-2xl">
        {headingName}
      </h1>
    <div><i onClick={handleInstruction} title="Instructions" className={`fa-solid fa-${iconName} animate-bounce text-sky-500 absolute right-5 top-5 text-2xl hover:text-sky-900 cursor-pointer`}></i></div>
    </div>
  );
}

export default Heading;
