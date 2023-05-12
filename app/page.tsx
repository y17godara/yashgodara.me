import {
  TopNavbar,
  ContainerIntroduction,
  ContainerSkills,
} from "./components";

const Spacer = () => {
  <div className="min-h-20"></div>;
};

export default function Home() {
  return (
    <>
      <main
        className="flex justify-center flex-col mx-auto scroll-smooth"
        data-scroll-container="true"
      >
        <div className="py-2 px-4 sm:px-8 md:px-12 sticky top-0 backdrop-blur-md z-[999]">
          <TopNavbar />
        </div>

        <div className="mx-auto h-[200vh]">
          <div className="m-auto flex flex-col p-4 align-center justify-center items-start">
            <ContainerIntroduction />
            <div className="p-5"></div>
            <hr className="w-48 h-[3px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="p-5"></div>

            <ContainerSkills />
            <div className="p-5"></div>
            <hr className="w-48 h-[3px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div className="p-5"></div>
          </div>
        </div>
      </main>
    </>
  );
}
