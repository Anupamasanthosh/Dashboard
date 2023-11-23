import React from "react";

function Pricing({ item }) {
  return (
    <div class="bg-white shadow-lg rounded-2xl text-start w-[300px] p-4 transition-transform transform hover:scale-105">
      <p class="text-3xl font-bold text-black ">{item.name}</p>
      <p class=" text-sm text-gray-500 relative">
        <span class="absolute top-2 left-0 w-16 h-1 transform skew-y-3 bg-red-500"></span>
        <span class="relative z-10">$ {item.price}/mo</span>
      </p>
      <p class="text-3xl font-bold text-black ">$ {item.actualPrice}</p>
      <div className="flex items-start justify-start w-auto">
        <button
          type="button"
          className="px-4 py-2 text-sm text-black bg-white border rounded-lg shadow hover:bg-black hover:text-white dark:hover-text-gray-900 text-start"
        >
          Get Started
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>
      </div>
      <hr className="mt-3 border-t-2 border-gray-300" />
      What youll get:
      <ul class="w-full mt-6 mb-6 text-sm text-black ">
        <li class="flex items-center mb-3 space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#10b981"
            viewBox="0 0 1792 1792"
          >
            <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
          </svg>
          <div>upto {item.users} users</div>
        </li>
        <li class="flex items-center mb-3 space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#10b981"
            viewBox="0 0 1792 1792"
          >
            <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
          </svg>
          <div>upto {item.storage} gb storage</div>
        </li>
        <li class="flex items-center mb-3 space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#10b981"
            viewBox="0 0 1792 1792"
          >
            <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
          </svg>
          <div>{item.support}</div>
        </li>
      </ul>
      <div className="text-center cursor-pointer underline ">
        EXPLORE FEATURES <span></span>
      </div>
    </div>
  );
}

export default Pricing;
