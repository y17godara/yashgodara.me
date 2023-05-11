/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
const ContainerSkills = () => {
  return (
    <>
      <section>
        <div>
          <div className="max-w-[768px] px-5">
            <div className="flex flex-col item-center gap-2">
              <h1 className="text-3xl font-bold">🖥️Technology</h1>
              <p>Here i mentioned some of Technology i have Work and </p>
              <div className="flex flex-col item-center gap-4">
                <div className="flex item-center gap-1">
                  <img
                    src="https://skillicons.dev/icons?i=html,css,js,python,c,tailwind,postman,react,next,nodejs,express,ts,mongo,cpp"
                    alt="skills-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContainerSkills;
