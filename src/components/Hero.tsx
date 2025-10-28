import React from "react";
import { ArrowDown, Download, Mail } from "lucide-react";
import HandDrawnArrow from "./common/HandDrawnArrow";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Adnan Hisham.
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-caveat text-gray-600 mb-6">
            Full-Stack Web Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experienced in building scalable web applications with a focus on
            seamless user experiences. Proficient in both front-end and back-end
            technologies, with a strong eye for design.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2">
            <Mail size={20} />
            Let's Work Together
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors duration-200 flex items-center gap-2">
            <Download size={20} />
            Download Resume
          </button>
        </div>

        <div className="relative">
          <HandDrawnArrow className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400" />
          <p className="font-caveat text-gray-500 text-sm mt-12">
            Scroll down to see my work
          </p>
        </div>
      </div>

      {/* Floating annotation */}
      <div className="absolute top-20 right-4 sm:right-8 lg:right-16 transform rotate-3 hidden md:block">
        <div className="bg-yellow-100 p-3 rounded-sm shadow-sm border-l-4 border-yellow-300">
          <p className="font-caveat text-sm text-gray-700">
            Available for freelance!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
