import React from 'react';
import Link from 'next/link';
import * as dataProjects from '@data/json/projects.json';
import { Card } from '@components/index';

type CardProps = {
    title: string;
};

const ProjectsPage = () => {
    return (
        <>
            <section>

                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        {/* 1 */}
                        <Card 
                            projectHightlight={dataProjects.project1.name}
                            projectGithub={dataProjects.project1.name}
                            projectDescription={dataProjects.project1.description}
                            projectTitle={dataProjects.project1.name}
                            projectImage={dataProjects.project1.images[1]}
                            projectTags={dataProjects.project1.tags}
                        />
                        {/* 4 */}


                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;
