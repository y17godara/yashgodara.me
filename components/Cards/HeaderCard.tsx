/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from 'react'
import { BsArrowRight } from 'react-icons/bs'
interface CardProps {
    imageSrc: string;
    imageAlt: string;
    projectTitle: string;
    projectHightlight: string;
    projectDescription: string;
    projectGithub: string;
}


const Card: React.FC<CardProps> = ({
    imageSrc,
    imageAlt,
    projectTitle,
    projectHightlight,
    projectDescription,
    projectGithub,

}: CardProps) => {

    return (
        <>
            {/* Card */}

            <div className="xl:min-w-[400px] h-full c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                <div className="relative pb-48 overflow-hidden">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                        className="min-h-[300px] absolute inset-0 h-full w-full object-cover"
                        src={imageSrc || "https://images.unsplash.com/photo-1601119479271-21ca92049c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"}
                        alt={imageAlt || "project-image-alt"}
                    />
                </div>
                <div className="flex flex-col p-4 sm:flex-row">
                    <div className="flex flex-col sm:w-1/2">
                        <span className="inline-block px-2 py-1 text-xs font-semibold leading-none tracking-wide text-orange-800 uppercase bg-orange-200 rounded-full w-fit">
                            {projectHightlight || "Project Highlight"}
                        </span>
                        <h2 className="mt-2 mb-2 font-bold">
                            {projectTitle || "Example Project Title"}
                        </h2>
                        <p className="text-sm">
                            {projectDescription ||
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."}
                        </p>
                        {/* <div className="flex items-center justify-around mt-3">
                            <a
                                href="#"
                                className="flex items-center gap-1 text-sm font-semibold text-blue-500 hover:underline"
                            >
                                Github <BsArrowRight />
                            </a>
                            <a
                                href="#"
                                className="flex items-center gap-1 text-sm font-semibold text-purple-500 hover:underline"
                            >
                                Deploy <BsArrowRight />
                            </a>
                        </div> */}
                    </div>
                    <div className="flex flex-col sm:w-1/2 sm:border-l sm:pl-4">
                        <div className="p-4 text-sm text-gray-700 border-t border-b">
                            <span className="flex items-center mb-1">
                                <i className="mr-2 text-gray-900 far fa-clock fa-fw"></i> 3 Tage
                            </span>
                            <span className="flex items-center">
                                <i className="mr-2 text-gray-900 far fa-address-card fa-fw"></i>{" "}
                                Example Example Example
                            </span>
                        </div>
                        <div className="flex items-center p-4 text-sm text-gray-600">
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-yellow-500 fill-current"
                            >
                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                            </svg>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-yellow-500 fill-current"
                            >
                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                            </svg>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-yellow-500 fill-current"
                            >
                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                            </svg>
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 text-yellow-500 fill-current"
                            >
                                <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                            </svg>
                            <span className="ml-2">44 Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card