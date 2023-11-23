import React from "react";
import Nav from "../Components/Nav/Nav";
import SideNav from "../Components/SideNav/SideNav";
import Content from "./Content";

function Home() {
  return (
    <div className="flex flex-col h-screen bg-blue-100 overflow-x-hidden">
      <div className="h-[100px] bg-blue-100">
        <Nav />
      </div>
      <div className="flex flex-row flex-1 lg:overflow-y-hidden overflow-y-auto bg-white">
        <div className="hidden lg:block xl:block w-1/6 shadow-xl bg-white">
          <SideNav />
        </div>
        <div className="lg:w-5/6 xl:w-5/6 lg:me-[55px] bg-white p-5 sm:w-full md:w-full overflow-y-auto">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Home;
