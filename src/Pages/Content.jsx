import React from "react";
import Title from "../Components/Contents/Title";
import Buttons from "../Components/Contents/Buttons";

function Content() {
  return (
    <div className="flex flex-col items-center p-[50px]">
      <div className="self-start">
        <Title />
      </div>

      <div className="self-end mb-4">
        <Buttons />
      </div>

      <div className="text-center mb-4">Price</div>

      <div className="text-center">Content</div>
    </div>
  );
}

export default Content;
