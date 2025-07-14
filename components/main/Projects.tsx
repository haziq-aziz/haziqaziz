import React from "react";
import { ProjectCard } from "../sub/ProjectCard";
import { FeaturedProject } from "../sub/FeaturedProject";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Projects
        </h1>
        <FeaturedProject />

        {/* First Row */}
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 my-4">
          <div className="flex-1 min-h-[400px]">
            <ProjectCard
              src="/images/projects/KTM.png"
              title="KTMKomuter - Train Ticket Management System"
              description="A web-based ticketing system that allows users to conveniently book train tickets by selecting their origin, destination, and ticket category. The platform streamlines the reservation process with a user-friendly interface and dynamic form handling."
              tech="C# .NET, ASP.NET MVC, Entity Framework Core, SQL Server, HTML, Bootstrap CSS, JavaScript"
              link="https://github.com/haziq-aziz/KTMKomuter"
            />
          </div>
          <div className="flex-1 min-h-[400px]">
            <ProjectCard
              src="/images/projects/SeleraKampung.png"
              title="Selera Kampung - A Restaurant Menu Package Booking App"
              description="A mobile application designed to simplify the process of booking restaurant menu packages for events. Users can seamlessly explore available packages, register, and manage their bookings all within an intuitive interface."
              tech="Dart, Flutter, SQLite"
              link="https://github.com/haziq-aziz/MUC-Project"
            />
          </div>
          <div className="flex-1 min-h-[400px]">
            <ProjectCard
              src="/images/projects/StudentHub.png"
              title="StudentHub - A Centralized Student Portal"
              description="Developed as a mini project for the Software Design & Integration course, this centralized student portal offers a unified system for students to manage their academic information and updates. A key focus of the project was exception handling and error management."
              tech="PHP, MySQL, JavaScript, HTML, Bootstrap CSS"
              link="https://github.com/haziq-aziz/ISB26504-Student-Hub"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 my-4">
          <div className="flex-1 min-h-[400px]">
            <ProjectCard
              src="/images/projects/eVehicle.png"
              title="AI Personalized App For EV"
              description="A working prototype mobile application built in 24 hours during a hackathon, designed to enhance the user experience for electric vehicle (EV) owners. The app provides personalized features such as charging station locations, battery health monitoring, and driving analytics."
              tech="React Native, Node.js, Open AI API, Firebase"
              link="https://github.com/haziq-aziz/setel-hackathon"
            />
          </div>
          <div className="flex-1 min-h-[400px]">
            
          </div>
          <div className="flex-1 min-h-[400px]">
            
          </div>
        </div>
      </div>
    </section>
  );
};
