import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import StickyNote from "./common/StickyNote";
import cellcity from "../assets/cellcity.png";
import chatapp from "../assets/chatapp.png";
import netflix from "../assets/netflix.png";
import simak from "../assets/simak.png";
import pos from "../assets/pos.png";

const projects = [
  {
    title: "E-commerce Application (CellCity)",
    description:
      "Developed a responsive e-commerce platform with a secure admin panel for efficient product, order, and user management. Integrated JWT/OAuth authentication, Razorpay payments, real-time cart updates, and a flexible discount system with coupon codes.",
    image: cellcity,
    tags: ["Full-Stack", "E-commerce", "Node.js"],
    color: "bg-green-50 border-green-200",
    annotation: "Live Project",
    links: {
      live: "https://8bbbe3eeba78.ngrok-free.app/",
      github: "https://github.com/AdnanHisham7/cellcity",
    },
  },
  {
    title: "Real-Time Chat App",
    description:
      "Built a feature-rich chat platform with real-time messaging using WebSockets, smart notifications, customizable themes including dark mode, secure JWT authentication, and media handling.",
    image: chatapp,
    tags: ["React", "WebSockets", "Real-Time"],
    color: "bg-blue-50 border-blue-200",
    annotation: "Personal Project",
    links: {
      live: "https://realtime-chat-app-gamma-flame.vercel.app/",
      github: "https://github.com/AdnanHisham7/realtime-chat-app",
    },
  },
  {
    title: "Netflix Clone",
    description:
      "Developed a fully responsive Netflix clone using React, replicating key UI and functionality. Integrated Firebase Authentication for secure login and TMDB API for fetching category-based content like popular, upcoming, and top-rated.",
    image: netflix,
    tags: ["React", "Firebase", "UI/UX"],
    color: "bg-purple-50 border-purple-200",
    annotation: "UI Clone",
    links: {
      live: "https://www.linkedin.com/posts/adnan-hisham-932174305_reactjs-firebase-webdevelopment-activity-7292391450045042688-YlvG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE3M8zYBRllxM4BhSGqmAZ8MReXo-bykdNI",
      github: "https://github.com/AdnanHisham7/netflix-clone",
    },
  },
  {
    title: "Construction Management System",
    description:
      "Comprehensive platform with role-based dashboards for Company Admin, Site Manager, Supervisor, Architect, and Client roles. Features dynamic permissions, real-time reports, stock management, secure file uploads, and cron jobs for alerts.",
    image: simak,
    tags: ["Full-Stack", "React", "MongoDB"],
    color: "bg-orange-50 border-orange-200",
    annotation: "Freelance Project",
    links: {
      live: "https://simakbuilders.com/",
      github: "https://github.com/AdnanHisham7/simak-builders",
    },
  },
  {
    title: "POS Billing System (PKS Traders)",
    description:
      "Fully functional POS system for retail stores with real-time invoice generation, barcode scanning, UPI/QR payments, customer/supplier management, low stock alerts, and advanced sales dashboard with filters.",
    image: pos,
    tags: ["React", "PostgreSQL", "Freelance"],
    color: "bg-pink-50 border-pink-200",
    annotation: "Freelance",
    links: { live: "https://pkstraders.in/", github: "https://github.com/AdnanHisham7/inventory-sales-system" },
  },
  {
    title: "Educational Institution Platform",
    description:
      "Full-stack platform with separate user and admin portals for course creation, blog management, and interactive learning. Includes responsive UI/UX with dark/light modes and secure email notifications.",
    image:
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Full-Stack", "Material-UI", "MongoDB"],
    color: "bg-red-50 border-red-200",
    annotation: "Educational",
    links: { live: "#", github: "#" },
  },
  {
    title: "Institute Developer Community Platform",
    description:
      "Collaborative full-stack social platform for institute developers featuring profile comparisons (LeetCode stats), follows, posts/likes/comments, admin roles, and real-time notifications with Redis.",
    image:
      "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["MERN", "Redis", "Team Project"],
    color: "bg-yellow-50 border-yellow-200",
    annotation: "Team Project",
    links: { live: "#", github: "#" },
  },
  {
    title: "SANDM Group Website & Subbrands",
    description:
      "Crafted digital presence for visionary brands: main agency site (sandmgroup.in) and landing pages for subbrands Livora, Enencia, and Sifon, focusing on modern web design and user engagement.",
    image:
      "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Web Design", "Landing Pages", "Freelance"],
    color: "bg-indigo-50 border-indigo-200",
    annotation: "Agency Freelance",
    links: { live: "https://sandmgroup.in/", github: "#" },
  },
  {
    title: "Manjeri Central Mahal Community Portal",
    description:
      "Community portal managing services like career guidance, academic news, scholarships, gallery, food supply programs, dialysis support, blood donor database, and sports academy for the mahal community.",
    image:
      "https://images.pexels.com/photos/267391/pexels-photo-267391.jpeg?auto=compress&cs=tinysrgb&w=400",
    tags: ["Community Platform", "Web Development", "Freelance"],
    color: "bg-teal-50 border-teal-200",
    annotation: "Community Freelance",
    links: { live: "https://manjericentralmahal.com", github: "#" },
  },
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-caveat text-gray-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work showcasing various design challenges
            and solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <StickyNote
              key={index}
              className={`${project.color} transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="relative">
                {project.annotation && (
                  <div className="absolute -top-2 -right-2 transform rotate-12 z-10">
                    <div className="bg-yellow-200 px-2 py-1 rounded-sm text-xs font-caveat text-gray-700">
                      {project.annotation}
                    </div>
                  </div>
                )}

                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white bg-opacity-50 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.links.live}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Site
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    <Github size={16} />
                    Case Study
                  </a>
                </div>
              </div>
            </StickyNote>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleShowMore}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-lg"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
