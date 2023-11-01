/* eslint-disable react/jsx-no-duplicate-props */
"use client";
import React, { useState, useMemo } from "react";
import jsonData from "@data/json/data.json";
import { Card, HeaderCard } from "@components/index";
import AnnouncementCard from "@components/Cards/AnnouncementCard";

const ProjectsPage = () => {
  // Filter Button State
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters((prevState) => !prevState);
  };

  //
  const dataProjects = jsonData.dataProjects;
  const [selectedTechnology, setSelectedTechnology] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const handleTechnologyChange = (option: string) => {
    setSelectedTechnology((prevTechnology) =>
      prevTechnology.includes(option)
        ? prevTechnology.filter((tech) => tech !== option)
        : [...prevTechnology, option]
    );
  };

  const handleCategoryChange = (option: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory.includes(option)
        ? prevCategory.filter((cat) => cat !== option)
        : [...prevCategory, option]
    );
  };

  const filteredProjects = useMemo(() => {
    let filtered = Object.values(dataProjects);

    if (selectedTechnology.length > 0) {
      filtered = filtered.filter((project) =>
        project.technology.some((tech: string) =>
          selectedTechnology.includes(tech)
        )
      );
    }

    if (selectedCategory.length > 0) {
      filtered = filtered.filter((project) =>
        selectedCategory.includes(project.Category)
      );
    }

    return filtered;
  }, [selectedTechnology, selectedCategory, dataProjects]);

  const sortedProjects = useMemo(() => {
    return filteredProjects.sort(
      (a, b) => parseInt(b.stars) - parseInt(a.stars)
    );
  }, [filteredProjects]);

  const renderedProjects = sortedProjects.map((project) => (
    <Card
      key={project.id}
      projectHightlight={project.name}
      projectGithub={project.repositorie}
      projectDescription={project.description}
      projectTitle={project.name}
      imageSrc={project.images["1"]}
      imageAlt="Project Image"
    />
  ));

  const technologyOptions = [
    "ReactJS",
    "NextJs",
    "Typescript",
    "Tailwind.css",
    "NodeJs",
    "ExpressJs",
    // Add more technology options as needed
  ];

  const categoryOptions = [
    "Web Development",
    "Android",
    // Add more category options as needed
  ];

  return (
    <>
      <section className="grid w-full">
        <AnnouncementCard />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 xl:gap-10 max-w-[1440px] mt-8">
          {/* Grid Header Card */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3">
            <div className="xl:min-w-[400px] h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
              {/* Card Content */}
              <HeaderCard
                projectHightlight={dataProjects.projectHeader.name}
                projectGithub={dataProjects.projectHeader.repositorie}
                projectDescription={dataProjects.projectHeader.description}
                projectTitle={dataProjects.projectHeader.name}
                imageSrc={dataProjects.projectHeader.images["1"]}
                imageAlt="Project Image"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex-col justify-center gap-6 mt-8 contents md:flex-row md:gap-0 md:pl-8">
            {/* Show/Hide Filters Button */}
            <button
              className={`bg-yellow-500 text-white px-4 py-2 rounded ${
                showFilters ? "md:ml-auto" : ""
              }`}
              onClick={toggleFilters}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
            {/* Technology Filter */}
            {showFilters && (
              <div className="mr-4">
                <label className="block mb-2 font-medium">Technology</label>
                {technologyOptions.map((option: string) => (
                  <div key={option} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`tech-${option}`}
                      className="mr-2 accent-yellow-500"
                      checked={selectedTechnology.includes(option)}
                      onChange={() => handleTechnologyChange(option)}
                    />
                    <label htmlFor={`tech-${option}`}>{option}</label>
                  </div>
                ))}
              </div>
            )}

            {/* Category Filter */}
            {showFilters && (
              <div>
                <label className="block mb-2 font-medium">Category</label>
                {categoryOptions.map((option: string) => (
                  <div key={option} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`category-${option}`}
                      className="mr-2 accent-yellow-500"
                      checked={selectedCategory.includes(option)}
                      onChange={() => handleCategoryChange(option)}
                    />
                    <label htmlFor={`category-${option}`}>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Rendered Projects */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 xl:gap-10 max-w-[1440px] mt-8">
        {renderedProjects}
      </section>
    </>
  );
};

export default ProjectsPage;
