import { TopNavbar, Container } from "./components";

const Spacer = () => {
    <div className="min-h-20"></div>
}

export default function Home() {
  return (
    <>
      <main
        className="flex justify-center flex-col mx-auto scroll-smooth"
        data-scroll-container="true"
      >
        
      </main>
      <section className="min-h-screen w-screen">
        <div>
          <TopNavbar />
        </div>

        <div className="max-w-3xl px-8 mx-auto">
          <div className="max-w-xl">
            <Container />
          </div>
        </div>
      </section>
    </>
  );
}
