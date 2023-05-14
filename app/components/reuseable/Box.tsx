"use client";

const Box = () => {
    return (
      <>
        <section className="flex flex-col gap-6">
          <div className="grid grid-col-1 grid-flow-row gap-4 sm:grid-cols-2 sm:gap-2">
            {/*eslint-disable @next/next/no-img-element*/}
            {/* 1 */}
            <div>
              <a
                href="https://github.com/y17godara/project_webPage_online-Shopping"
                target="_blank"
              >
                <img
                  alt="img"
                  className="w-full rounded-[20px] object-fill"
                  src="./static/project_bg.svg"
                />
              </a>
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-row item-center">
                  <a
                    href="https://y17godara.github.io/project_webPage_online-Shopping"
                    className="flex flex-row items-center text-red-700"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                  |
                  <a
                    href="https://github.com/y17godara/project_webPage_online-Shopping"
                    className="flex flex-row items-center text-green-700"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
                <h5 className="text-lg font-bold mb-3">E - Commerce WebPage</h5>
                <h6 className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                  #HTML #CSS #JS
                </h6>
                <p className="text-gray-500">
                  Simple Frontend E - Commerce WebPage using HTML CSS and JS
                </p>
              </div>
            </div>

            {/* 2 */}
          </div>
        </section>
      </>
    );
};

export default Box;
