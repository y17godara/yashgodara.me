/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
const ContainerSkills = () => {
  return (
    <>
      <section>
        <div>
          <div className="max-w-[768px] px-5">
            <div className="flex flex-col gap-2 item-center">
              <h1 className="text-3xl font-bold">🖥️Technology</h1>
              <p className="mt-4">
                I have proficiency in a variety of technologies. I am
                knowledgeable about programming languages, and having extensive
                experience in web development technologies such as HTML, CSS,
                and JavaScript, which have been crucial to developing web
                applications that are engaging and responsive.
              </p>
              
              <div className="flex flex-col gap-4 item-center">
                <div className="flex gap-1 item-center">
                  <img
                    src="https://skillicons.dev/icons?i=html,css,js,cpp,react,next,nodejs,express,ts,tailwind,postman,mongo,postgresql,git,scss,redux,docker,figma,"
                    alt="skills-logo"
                  />
                </div>
                <p>
                  In addition, I am Currently working with TypeScript , ReactJs
                  and NextJs with the Help of Tailwind Css. In addition, I am
                  exploring cloud platforms, databases, and backend technologies
                  simultaneously
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContainerSkills;
