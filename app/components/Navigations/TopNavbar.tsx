"use client";

import { SiGithub, SiTwitter } from "react-icons/si";
import Image from "next/image";

const TopNavbar = () => {
  return (
    <>
      <section>
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
              href="https://github.com/y17godara"
              target="_blank"
              title="github"
            >
              <SiGithub size={20} />
            </a>
            <a
              href="https://github.com/y17godara"
              target="_blank"
              title="twitter"
            >
              <SiTwitter size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopNavbar;
