"use client"
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

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
    // const router = useRouter();

    //router for navigation
    const router = usePathname();


    return (
        <>
            {projects.map((project) => (
                <Link
                    key={project.id}
                    className='border border-red-500'
                    type="button"
                    href={`${URL}/${project.id}`}
                >
                    {project.name}
                </Link>
            ))}
        </>
    );
};

export default Page;
