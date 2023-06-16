import React from 'react'
import { ContainerProjects } from "@components/index";

const page = () => {
  return (
    <>
      <main
        className="flex justify-center flex-col mx-auto scroll-smooth transition duration-150 ease-out hover:ease-in"
        data-scroll-container="true"
      >
        <div className="mx-auto">
          <div className="m-auto flex flex-col p-4 align-center justify-center items-start">

            {/*  */}
            <ContainerProjects />
            <div className="p-10"></div>
            <hr className="w-48 h-[3px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="p-10"></div>
            
          </div>
        </div> 
      </main>
    </>
  )
}

export default page