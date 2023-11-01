import Image from "next/image";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

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
            loading="lazy"
            className="inline w-32 h-32 rounded-3xl avatar"
          />
        </div>
        <div>
          <div className="max-w-[768px] px-5">
            <h1 className="flex flex-col mt-4 text-3xl font-bold md:items-end md:flex-row">
              <div title="y17godara">Yash Godara</div>

              <div className="flex items-center md:ml-3">
                <div className="text-lg">[he/him]</div>
                <div className="flex items-center gap-1 ml-3 text-xl">
                  <a
                    title="twitter"
                    href="https://twitter.com/y17godara"
                    target="_blank" rel="noopener noreferrer" 
                    className="transition hover:opacity-80"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    target="_blank" rel="noopener noreferrer" 
                    title="linkedIn"
                    href="https://www.linkedin.com/in/yash-godara-a91442246/"
                    className="transition hover:opacity-80"
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
