import React from "react";
import { MapPin, Coffee, Heart } from "lucide-react";
import portrait from "../assets/portrait.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-caveat text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The person behind the pixels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src={portrait}
                alt="Adnan Hisham"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating sticky note */}
            <div className="absolute -bottom-4 -right-4 transform rotate-6 bg-pink-100 p-4 rounded-sm shadow-lg border border-pink-200">
              <p className="font-caveat text-pink-700 text-sm">
                That's me at my favorite coffee shop! ☕
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                My Development Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I began my journey as a web developer with a keen interest in
                creating functional and visually appealing applications. My
                background in UI/UX design allows me to approach development
                with a user-centric mindset, ensuring that every project I work
                on is both technically sound and aesthetically pleasing.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With experience in both front-end and back-end technologies,
                I've built a variety of applications, from e-commerce platforms
                to real-time chat apps. I enjoy tackling complex challenges and
                finding innovative solutions that enhance user experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, I love exploring new technologies,
                contributing to open-source projects, and freelancing on design
                and development tasks. I believe in continuous learning and
                staying updated with the latest industry trends.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <MapPin className="mx-auto mb-2 text-gray-600" size={24} />
                <p className="text-sm text-gray-600">Based in</p>
                <p className="font-semibold text-gray-900">Calicut, India</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <Coffee className="mx-auto mb-2 text-gray-600" size={24} />
                <p className="text-sm text-gray-600">Fuel</p>
                <p className="font-semibold text-gray-900">Specialty Coffee</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
                <Heart className="mx-auto mb-2 text-gray-600" size={24} />
                <p className="text-sm text-gray-600">Passion</p>
                <p className="font-semibold text-gray-900">User Empathy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-green-50 rounded-lg p-6 border border-green-200 max-w-2xl">
            <p className="text-gray-700 mb-2">
              <strong>My Philosophy:</strong> Great design is invisible.
              It solves problems so elegantly that users don't even notice the
              interface – they just accomplish their goals effortlessly.
            </p>
            <p className="font-caveat text-green-600">
              Minimalism in design, precision in code ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
