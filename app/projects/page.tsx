import { useRouter } from 'next/router';
import React from 'react';
import { projects } from './projects.json';

const Page = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Find the project with the matching slug
    const project = projects.find((p) => p.id === slug);

    if (!project) {
        return <h1>Project not found</h1>;
    }

    return (
        <>
            <h1 className="font-bold text-3xl md:text-4xl h-14">{project.name}</h1>
        </>
    );
};

export default Page;
