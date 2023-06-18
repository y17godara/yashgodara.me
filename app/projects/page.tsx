"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

interface Project {
    id: string;
    name: string;
}

const projects: Project[] = [
    {
        id: 'project-1',
        name: 'Project 1',
    },
    {
        id: 'project-2',
        name: 'Project 2',
    },
    {
        id: 'project-3',
        name: 'Project 3',
    },
];

const URL = '/projects';

const Page = () => {
    const router = useRouter();

    return (
        <>
            {projects.map((project) => (
                <button
                    key={project.id}
                    className='border border-red-500'
                    type="button"
                    onClick={() => router.push(`${URL}/${project.id}`)}
                >
                    {project.name}
                </button>
            ))}
        </>
    );
};

export default Page;
