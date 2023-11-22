import React from "react";
import Nav from "../Components/Nav/Nav";
import SideNav from "../Components/SideNav/SideNav";
import Content from "./Content";

function Home() {
  return (
    <div className="flex flex-col h-screen bg-blue-200">
      <div className="h-[120px] bg-blue-200">
        <Nav />
      </div>
      <div className="flex flex-row flex-1 overflow-y-hidden">
        <div className="hidden lg:block xl:block w-1/6 shadow-xl bg-white">
          <SideNav />
        </div>
        <div className="w-5/6 me-[55px] bg-white p-5">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Home;
