import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContainerIntroduction = () => {
  return (
    <>
      <section>
        <div>
          <Image
            src="https://i.imgur.com/n05Wr0e.png"
            alt="logo"
            width={120}
            height={120}
            className="w-32 h-32 rounded-3xl inline avatar"
          />
        </div>
        <div>
          <div className="max-w-[768px] px-5">
            <h1 className="mt-4 text-3xl font-bold flex md:items-end md:flex-row flex-col">
              <div title="y17godara">Yash Godara</div>

              <div className="flex md:ml-3 items-center">
                <div className="text-lg">[he/they]</div>
                <div className="flex text-xl ml-3 gap-1 items-center">
                  <a
                    href="https://twitter.com/y17godara"
                    target="_blank"
                    className="hover:opacity-80 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://github.com/y17godara"
                    target="_blank"
                    className="hover:opacity-80 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yash-godara-a91442246/"
                    target="_blank"
                    className="hover:opacity-80 transition"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </h1>

            <p className="mt-4">
              Hello there, I am <span className=""></span> Yash Godara from
              India, currently studying and working in the field of development
              and design. Every day I enjoy learning something new, and I have a
              good understanding of UI Design, Web Development, and Python, C
              Programming.
            </p>
            <p>
              Also, on occasion, I love to blog and create documentation related
              to my studies that I use as notes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContainerIntroduction;
