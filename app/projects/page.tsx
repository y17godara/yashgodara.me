"use client";
import React, { useState, useMemo } from 'react';
import * as jsonData from '@data/json/data.json';
import { Card, HeaderCard } from '@components/index';

const ProjectsPage = () => {
    const [selectedTechnology, setSelectedTechnology] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const projectsData = jsonData.dataProjects;

    const filteredProjects = useMemo(() => {
        let filtered = Object.values(projectsData);

        if (selectedTechnology) {
            filtered = filtered.filter((project) =>
                project.technology.includes(selectedTechnology)
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter(
                (project) => project.Category === selectedCategory
            );
        }

        return filtered;
    }, [selectedTechnology, selectedCategory, projectsData]);

    const sortedProjects = useMemo(() => {
        return filteredProjects.sort((a, b) => parseInt(b.stars) - parseInt(a.stars));
    }, [filteredProjects]);

    const renderedProjects = sortedProjects.map((project) => (
        <Card
            key={project.id}
            projectHightlight={project.name}
            projectGithub={project.repositorie}
            projectDescription={project.description}
            projectTitle={project.name}
            imageSrc={project.images['1']}
            imageAlt="Project Image"
        />
    ));

    const technologyOptions = [
        'ReactJS',
        'NextJs',
        'Typescript',
        'Tailwind.css',
        'NodeJs',
        'ExpressJs',
        // Add more technology options as needed
    ];

    const categoryOptions = [
        'Web Development',
        'Android',
        // Add more category options as needed
    ];

    return (
        <>
            <section>
                <div className="flex justify-center mt-8">
                    {/* Technology Filter */}
                    <div className="mr-4">
                        <label htmlFor="technology" className="block mb-2 font-medium">
                            Technology
                        </label>
                        <select
                            id="technology"
                            className="p-2 border border-gray-300 rounded"
                            value={selectedTechnology}
                            onChange={(e) => setSelectedTechnology(e.target.value)}
                        >
                            <option value="">All</option>
                            {technologyOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Category Filter */}
                    <div>
                        <label htmlFor="category" className="block mb-2 font-medium">
                            Category
                        </label>
                        <select
                            id="category"
                            className="p-2 border border-gray-300 rounded"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">All</option>
                            {categoryOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 xl:gap-10 max-w-[1440px] mt-8">
                    {/* Grid Header Card */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3">
                        <div className="xl:min-w-[400px] h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                            {/* Card Content */}
                            <HeaderCard
                                projectHightlight={filteredProjects[0]?.name}
                                projectGithub={filteredProjects[0]?.repositorie}
                                projectDescription={filteredProjects[0]?.description}
                                projectTitle={filteredProjects[0]?.name}
                                imageSrc={filteredProjects[0]?.images['1']}
                                imageAlt="Project Image"
                            />
                        </div>
                    </div>

                    {/* Rendered Projects */}
                    {renderedProjects}
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;
