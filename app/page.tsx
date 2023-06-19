import {
  ContainerIntroduction,
  ContainerSkills,
  // ContainerEducation,
} from "@components/index";

export default function Home() {
  return (
    <>

      <ContainerIntroduction />
      <div className="p-5"></div>
      <hr className="w-48 h-[3px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <div className="p-5"></div>

      <ContainerSkills />
      <div className="p-5"></div>
      <hr className="w-48 h-[3px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <div className="p-5"></div>

      {/* <ContainerEducation /> */}
    </>
  );
}
