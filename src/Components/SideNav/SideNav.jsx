import React from "react";
import UserSection from "./UserSection";
import MenuItems from "./MenuItems";

function SideNav() {
  return (
    <div class="flex flex-col">
      <div class="h-auto">
        <UserSection />
        <MenuItems />
      </div>
    </div>
  );
}

export default SideNav;
