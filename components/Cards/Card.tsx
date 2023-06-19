/* eslint-disable @next/next/no-img-element */
import React, {ReactNode} from 'react'
import { BsArrowRight } from 'react-icons/bs'
interface CardProps {
    imageSrc: string;
    imageAlt: string;
    projectTitle: string;
    projectHightlight: string;
    projectDescription: string;
    projectGithub: string;
    projectTags: string[];
}


const Card: React.FC<CardProps> = ({
    imageSrc,
    imageAlt,
    projectTitle,
    projectHightlight,
    projectDescription,
    projectGithub,
    projectTags,

}: CardProps) => {



    return (
        <>
            {/* Card */}
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 py-4 px-2">
                <div className="xl:min-w-[400px] xl:min-h-[600px] c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="relative pb-48 xl:pb-56 overflow-hidden">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img
                            className="min-h-[300px] absolute inset-0 h-full w-full object-cover"
                            src={imageSrc || "https://images.unsplash.com/photo-1601119479271-21ca92049c81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"}
                            alt={imageAlt || "project-image-alt"}
                        />
                    </div>
                    <div className="p-4">
                        <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                            {projectHightlight || "Project Hightlight"}
                        </span>
                        <h2 className="mt-2 mb-2  font-bold">
                            {projectTitle || "Example Project Title"}
                        </h2>
                        <p className="text-sm">
                            {projectDescription || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."}
                        </p>
                        <div className="mt-3 flex justify-around items-center">
                            <a href='#' className="flex gap-1 items-center text-sm font-semibold hover:underline text-blue-500">Github <BsArrowRight /></a>
                            <a href='#' className="flex gap-1 items-center text-sm font-semibold hover:underline text-purple-500">Deploy <BsArrowRight /></a>
                        </div>
                    </div>
                    <div className="p-4 border-t border-b text-sm text-gray-700">
                        {/* <span className="flex items-center mb-1">
                            <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
                        </span>
                        <span className="flex items-center">
                            <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i> Ermäßigung mit Karte
                        </span> */}
                        {Array.isArray(projectTags) && projectTags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-block px-2 py-1 mr-1 bg-gray-200 text-gray-800 rounded-full font-semibold uppercase tracking-wide text-xs"
                            >
                                {tag}
                            </span>
                        ))}

                        
                    </div>
                    <div className="p-4 flex items-center text-sm text-gray-600"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><span className="ml-2">34 Bewertungen</span></div>
                </div>
            </div>
        </>
    )
}

export default Card