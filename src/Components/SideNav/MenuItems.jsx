import React from "react";
import { menu } from "../../Utils/MenuItems";
function MenuItems() {
  return (
    <div class="relative flex flex-col h-screen">
      <nav class="mt-10 ">
        {menu.map((item, index) => (
          <a
            class="hover:text-gray-800 hover:bg-blue-100 flex items-center p-2 my-6 me-5 transition-colors dark:hover:text-white dark:hover:bg-blue-100 duration-200  text-gray-600 dark:text-gray-400 rounded-e-md "
            href="#"
            key={index}
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              class="m-auto"
              viewBox="0 0 2048 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={item.path}></path>
            </svg>
            <span class="mx-4 text-lg font-normal text-black">{item.name}</span>
            <span class="flex-grow text-right"></span>
          </a>
        ))}
      </nav>
      <div className="flex items-center justify-center bg-blue-50">
        <a
          className="text-black  hover:text-gray-800  transition-colors duration-200 flex items-center py-2 px-8"
          href="#"
        >
          <span className="font-medium px-3">Logout</span>
          <svg
            class="w-5 h-5  text-gray-300 fill-current hover:text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 4.00894C13.0002 3.45665 12.5527 3.00876 12.0004 3.00854C11.4481 3.00833 11.0002 3.45587 11 4.00815L10.9968 12.0116C10.9966 12.5639 11.4442 13.0118 11.9965 13.012C12.5487 13.0122 12.9966 12.5647 12.9968 12.0124L13 4.00894Z"
              fill="currentColor"
            ></path>
            <path
              d="M4 12.9917C4 10.7826 4.89541 8.7826 6.34308 7.33488L7.7573 8.7491C6.67155 9.83488 6 11.3349 6 12.9917C6 16.3054 8.68629 18.9917 12 18.9917C15.3137 18.9917 18 16.3054 18 12.9917C18 11.3348 17.3284 9.83482 16.2426 8.74903L17.6568 7.33481C19.1046 8.78253 20 10.7825 20 12.9917C20 17.41 16.4183 20.9917 12 20.9917C7.58172 20.9917 4 17.41 4 12.9917Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default MenuItems;
