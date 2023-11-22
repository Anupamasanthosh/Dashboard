import React from "react";

function Buttons() {
  return (
    <button class="px-2 py-1 w-64 flex justify-between transition ease-in duration-200 uppercase rounded-full  border-2 border-gray-900 focus:outline-none">
      <button class="px-2 transition w-1/2 ease-in duration-200 uppercase rounded-full bg-blue-100 hover:bg-blue-100 hover:text-black">
        Monthly
      </button>
      <button class=" px-2 transition w-1/2  ease-in duration-200 uppercase rounded-full hover:bg-blue-100 hover:text-black">
        Annually
      </button>
    </button>
  );
}

export default Buttons;
