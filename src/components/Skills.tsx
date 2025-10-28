import React from "react";
import {
  Palette,
  Code,
  Users,
  Search,
  Zap,
  Heart,
  Server,
  Database,
  Cloud,
  PenTool,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code size={20} />,
    skills: ["JavaScript", "TypeScript"],
    annotation: "Core Languages",
  },
  {
    title: "Front-End Development",
    icon: <Palette size={20} />,
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "shadcn",
      "React",
      "Redux",
      "Vite",
      "Framer Motion",
      "UI/UX Design",
      "Figma",
    ],
    annotation: "UI & Client-Side Tools",
  },
  {
    title: "Back-End & APIs",
    icon: <Server size={20} />,
    skills: [
      "Node.js",
      "Express.js",
      // "MVC Architecture",
      "JWT",
      "OAuth 2.0",
      "Nodemailer",
      "multer",
      "Razorpay",
      "Socket.io",
      "WebRTC",
      "axios",
      "Postman",
      "Ngrok",
    ],
    annotation: "Server, Auth, API, and Real-time",
  },
  {
    title: "Databases & Cloud",
    icon: <Database size={20} />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Hostinger"],
    annotation: "Storage & Deployment",
  },
  {
    title: "Tools & Platforms",
    icon: <PenTool size={20} />,
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "After Effects",
      "Canva",
      "Capcut",
      "Lightroom",
    ],
    annotation: "Dev Tools & Creative Software",
  },
  {
    title: "Other Skills",
    icon: <Zap size={20} />,
    skills: [
      "Data Structures & Algorithms (DSA)",
      "Video Editing",
      "Poster Design",
    ],
    annotation: "General & Cross-Disciplinary Skills",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-caveat text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300 relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="absolute -bottom-2 -right-2 transform rotate-12">
                  <div className="bg-yellow-100 px-2 py-1 rounded-sm text-xs font-caveat text-gray-600 border border-yellow-200">
                    {category.annotation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 rounded-lg p-6 border border-blue-200">
            <p className="text-gray-700 mb-2">
              <strong>Always learning:</strong> Currently exploring AI-assisted
              design tools and advanced prototyping techniques
            </p>
            <p className="font-caveat text-blue-600">
              Growth mindset is key! 🌱
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
