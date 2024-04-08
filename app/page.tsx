import Image from "next/image";
import HeroSection from "../components/nonauthenticated/HeroSection";
import Navbar from "../components/nonauthenticated/Navbar";
import Footer from "../components/nonauthenticated/Footer";
import { Router } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-black flex flex-col items-center justify-center">
      <HeroSection/>
      <Footer/>
    </div>
  );
}