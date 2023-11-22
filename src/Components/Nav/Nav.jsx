import React, { useEffect, useState } from "react";
import { menu } from "../../Utils/MenuItems";

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center justify-between h-full text-white bg-blue-100 relative">
      <div className="bg-white h-[120px]">
        <img
          src="https://as1.ftcdn.net/v2/jpg/05/62/00/06/1000_F_562000648_CTSiV1u7yEA59yJej54Km4ulwJk0vGMZ.jpg"
          alt=""
          className="object-fill h-full md:w-[250px]"
        />
      </div>

      <div className="flex flex-row items-center justify-between md:pr-[70px]">
        <button
          type="button"
          class="relative  p-2 text-left bg-white rounded-md shadow-lg cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <span class="flex items-center">
            <img
              src="https://imgs.search.brave.com/ykGWZb_qahedbC62oHehfLWk-YQ4fO7xxssk-VfdZsg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/NjEyMTA1L3Bob3Rv/L3Jvc2UtaXNvbGF0/ZWQtb24td2hpdGUt/YmFja2dyb3VuZC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/aTFFcm05VFBoVWtN/RmNiTkhlR1E4Q0dh/UFh1RDRBN01vRV9t/azR4ZDBWaz0"
              alt=""
              className="object-cover w-8 h-8 rounded-full mr-2"
            />
            <span class="block ml-3 truncate text-black">
              XYZ Enterprises Pvt.Ltd
            </span>
          </span>
        </button>
        <button
          type="button"
          class="relative p-3 text-left  ml-2 bg-white text-black rounded-md shadow-lg cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm hidden md:block lg:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          class="relative p-3 text-left  ml-2 bg-white text-black rounded-md shadow-lg cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm block md:hidden lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {open && (
          <div class="absolute z-10 w-[250px] mt-[300px] bg-white rounded-md shadow-lg">
            <ul
              tabindex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              class="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {menu.map((item, index) => (
                <li
                  id="listbox-item-0"
                  role="option"
                  key={index}
                  class="relative py-2 pl-3 text-gray-900 cursor-default select-none hover:bg-indigo-500 hover:text-white pr-9"
                >
                  <div class="flex items-center">
                    <span class="block ml-3 font-normal truncate">
                      {item.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
