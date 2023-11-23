import React from "react";

function Plan({ plan }) {
  return (
    <div className="w-full h-full sm:w-full md:w-1/3 lg:w-1/2 xl:w-1/2 mb-4 sm:mb-4 md:mb-0 lg:mb-0 xl:mb-0 p-5">
      <div class="flex flex-row items-center justify-between w-auto  p-4 bg-white shadow-lg rounded-2xl mt-5">
        <div className="flex flex-col items-start space-y-4 w-1/2">
          <div class="text-xs py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
            {plan.title}
          </div>
          <p class="mb-2 text-xl font-medium text-gray-800">{plan.name}</p>
          <p class="text-xs text-gray-600">{plan.Des}</p>
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
        <div className="flex flex-col items-start">
          <div className="">What youll get:</div>

          <ul class="w-full mt-6 mb-6 text-sm text-black ">
            <li class="flex items-start mb-3 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#10b981"
                viewBox="0 0 1792 1792"
              >
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
              </svg>
              <div>upto {plan.users} users</div>
            </li>
            {plan.storage && (
              <li class="flex items-start mb-3 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#10b981"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>upto{plan.storage}gb storage</div>
              </li>
            )}
            {plan.services && (
              <li class="flex items-start mb-3 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#10b981"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
                <div>{plan.services}</div>
              </li>
            )}
            <li class="flex items-start mb-3 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#10b981"
                viewBox="0 0 1792 1792"
              >
                <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
              </svg>
              <div>{plan.note}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Plan;
