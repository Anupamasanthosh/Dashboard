import React from "react";

function UserSection() {
  return (
    <div class="bg-white p-5 shadow-md">
      <div class="flex-col  flex justify-center items-center">
        <div class="flex-shrink-0">
          <a href="#" class="relative block">
            <img
              alt="profil"
              src="https://imgs.search.brave.com/NRQQquyyBIUMbjSNdOT9d36Rud8R1r48MgXWC6rixlk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/dXRlLXNtaWxpbmct/eW91bmctbWFuLXdp/dGgtYnJpc3RsZS1s/b29raW5nLXNhdGlz/ZmllZF8xNzY0MjAt/MTg5ODkuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
              class="mx-auto object-cover rounded-full h-20 w-20 "
            />
          </a>
        </div>
        <div class="mt-2 mb-2 text-center flex flex-col">
          <span class="text-lg font-bold text-black ">
            Ram Mohan <span className="text-blue-500">&gt;</span>
          </span>
          <span class="text-xs text-black">rammohan2@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default UserSection;
