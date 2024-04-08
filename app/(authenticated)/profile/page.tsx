import Profile from "@/components/authenticated/Profile";
import Navbar from "@/components/nonauthenticated/Navbar";
import React from "react";

export default function page() {


  return (
    <div className="min-h-screen bg-black flex flex-col items-center w-[100%]">
      <Profile/>
    </div>
  );
}
