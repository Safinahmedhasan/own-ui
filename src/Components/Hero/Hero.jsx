import Navbar from "../../layouts/Navbar/Navbar";
import react from "../../assets/Hero/React.webp";
import tailwind from "../../assets/Hero/nwt9ncojkvwmjfkaada8upafvpnu.png";
import html from "../../assets/Hero/html-icon.webp";
import figma from "../../assets/Hero/figma-logo-512.webp";
import nextJs from "../../assets/Hero/nextjs-icon-dark-background.png";
import heroBanner from "../../assets/Hero/hero-banner.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col mt-32">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl md:w-[700px] text-center px-5">
          <span>Tailwind CSS</span>{" "}
          <span className="text-orange-400">
            UI Components, Blocks and Templates
          </span>
        </h2>
        <p className="md:w-[900px] text-center mt-5 md:text-base text-sm px-5 text-slate-500">
          Tailwind CSS UI components, blocks, sections, and templates crafted
          for web apps, marketing, e-commerce, dashboards, and more — Browse and
          effortlessly copy-paste from over 500 components and templates to
          craft high-quality, custom Tailwind CSS websites without coding or
          designing from scratch. Now available for HTML, React, Vue, and Figma!
        </p>
        <div className="flex justify-center items-center mt-10 space-x-3">
          <div className="border-2 py-2 px-8 rounded-lg">
            <p className="font-semibold italic text-slate-500 md:text-base text-sm">
              @No need Installation
            </p>
          </div>
          <Link to='/dashboard'>
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-4 py-2 rounded-lg md:text-base text-sm">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-10">
        <div className="flex justify-center items-center gap-10 mt-10">
          <div className="border-2 rounded-full">
            <img src={html} alt="" className="w-12 p-1" />
          </div>
          <div className="border-2 rounded-full">
            <img src={tailwind} alt="" className="w-12 p-1" />
          </div>
          <div className="border-2 rounded-full">
            <img src={figma} alt="" className="w-12 p-1" />
          </div>
          <div className="border-2 rounded-full">
            <img src={react} alt="" className="w-12 p-1" />
          </div>
          <div className="border-2 rounded-full">
            <img src={nextJs} alt="" className="w-12 p-1" />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <img src={heroBanner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
