import React from 'react';
import * as jsonData from '@data/json/data.json';
import { Card, HeaderCard } from '@components/index';


const ProjectsPage = () => {

    // Get the data from JSON file
    const project1 = jsonData.dataProjects.project1;
    const project2 = jsonData.dataProjects.project2;


    return (
        <>
            <section>
                    <div className="grid grid-cols-1 sm:flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 xl:gap-10 max-w-[1440px]">
                        {/* Grid Header Card */}
                        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3">
                            <div className="xl:min-w-[400px] h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                {/* Card Content */}
                                <HeaderCard
                                    projectHightlight={project1.name}
                                    projectGithub={project1.repositorie}
                                    projectDescription={project1.description}
                                    projectTitle={project1.name}
                                    imageSrc={project1.images['1']} // Add the image source property
                                    imageAlt="Project Image" // Add the image alt property
                                />
                            </div>
                        </div>
                        {/* card data */}
                        <Card
                            projectHightlight={project2.name}
                            projectGithub={project2.repositorie}
                            projectDescription={project2.description}
                            projectTitle={project2.name}
                            // imageSrc={project2.images['1']} // Add the image source property
                            imageAlt="Project Image" // Add the image alt property
                        />
                       
                        {/* Add more cards as needed */}
                    </div>
            </section>
        </>
    );
};

export default ProjectsPage;
