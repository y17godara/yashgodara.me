import Image from "next/image";
import { FaKickstarter, FaTwitter, FaLinkedin } from "react-icons/fa";

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
                    title="twitter"
                    href="https://twitter.com/y17godara"
                    target="_blank"
                    className="hover:opacity-80 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    title="github"
                    href="https://kick.com/yashgodara"
                    target="_blank"
                    className="hover:opacity-80 transition"
                  >
                    <FaKickstarter />
                  </a>
                  <a
                    title="linkedIn"
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
              Hello, my name is Yash Godara and I am a development and design
              enthusiast from India. I am currently studying in same field, and
              I am passionate about learning something new every day. My areas
              of expertise include Web Development, as well as Programming.
            </p>
            <p>
              In addition to my technical skills, I enjoy ui-designing, writing
              and blogging about my experiences and knowledge gained through my
              studies and projects. I often create detailed documentation that I
              use as notes to help me better understand and retain the
              information.
            </p>
            <p>
              I believe that continuous learning and improvement are essential
              to success in any field, and I am committed to expanding my
              knowledge and skills to stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContainerIntroduction;
