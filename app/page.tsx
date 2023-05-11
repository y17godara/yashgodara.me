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
          <div className="flex flex-col p-4 align-center justify-center items-start">
            <ContainerIntroduction />
            <div className="p-5"></div>
            <ContainerSkills />
          </div>
        </div>
      </main>
    </>
  );
}
