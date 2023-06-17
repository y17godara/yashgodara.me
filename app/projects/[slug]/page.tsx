import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import React from 'react';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';


const projects = [
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


interface PageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;

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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async (
  context: GetStaticPropsContext<ParsedUrlQuery>
) => {
  const { params } = context;

  // Fetch data for the specific project using the slug
  const { slug } = params as { slug: string };

  return {
    props: {
      params: {
        slug,
      },
    },
  };
};

export default Page;
