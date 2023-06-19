"use client";
// import { SiGithub, SiTwitter } from "react-icons/si";
import Image from "next/image";
import AnnouncementCard from "../Cards/AnnouncementCard";

const TopNavbar = () => {
  return (
    <>  
      <section className="w-full px-2">
        <div>
          <div className="flex flex-row justify-between items-center">
            <a href="/">
              <div
                title="yashgodara.me"
                className="flex flex-row items-center gap-2 h-[88px]"
              >
                <Image
                  className="hidden items-center md:flex xl:flex"
                  src="https://i.imgur.com/n05Wr0e.png"
                  alt="logo"
                  width={60}
                  height={60}
                />
                <h1 className="flex text-xl items-center font-[500]">
                  yashgodara.me
                </h1>
              </div>
            </a>
            <div className="flex flex-row item-center gap-2">
              <a
                href="/resume.pdf"
                download="resume.pdf"
                title="Download Resume"
                className="bg-yellow-300 border-b-2 border-gray-900 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-gray-800 py-2 px-4 rounded inline-flex items-center"
                >
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Resume</span>
              </a>

            </div>
          </div>
          {/*  */}
          
          {/*  */}
        </div>
      </section>
    </>
  );
};

export default TopNavbar;

                {/* <a
                href="https://github.com/y17godara"
                target="_blank"
                title="github"
              >
                <SiGithub size={20} />
              </a> */}
                {/* <a
                href="https://github.com/y17godara"
                target="_blank"
                title="twitter"
              >
                <SiTwitter size={20} />
              </a> */}