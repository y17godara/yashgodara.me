import "./Box.css";

const Box = () => {
    return (
      <>
        <section className="flex flex-col gap-6">
          <div className="grid grid-col-1 grid-flow-row gap-4 sm:grid-cols-2 sm:gap-2">
            {/*eslint-disable @next/next/no-img-element*/}
            <div>
              <img
                alt="img"
                className="w-full rounded-[20px] object-fill"
                src="https://source.unsplash.com/random/320x240"
              />
              <div className="flex flex-col items-center text-center ">
                <h5 className="text-lg font-bold mb-3">E - Commerce WebPage</h5>
                <h6 className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                  #HTML #CSS #JS
                </h6>
                <p className="text-gray-500">
                  Simple Frontend E - Commerce WebPage using HTML CSS and JS
                </p>
              </div>
            </div>
            <div>
              <img
                alt="img"
                className="w-full rounded-[20px] object-fill"
                src="https://source.unsplash.com/random/320x240"
              />
              <div className="flex flex-col items-center text-center ">
                <h5 className="text-lg font-bold mb-3">E - Commerce WebPage</h5>
                <h6 className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                  #HTML #CSS #JS
                </h6>
                <p className="text-gray-500">
                  Simple Frontend E - Commerce WebPage using HTML CSS and JS
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-col-1 grid-flow-row gap-4 sm:grid-cols-2 sm:gap-2">
            {/*eslint-disable @next/next/no-img-element*/}
            <div>
              <img
                alt="img"
                className="w-full rounded-[20px] object-fill"
                src="https://source.unsplash.com/random/320x240"
              />
              <div className="flex flex-col items-center text-center ">
                <h5 className="text-lg font-bold mb-3">E - Commerce WebPage</h5>
                <h6 className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                  #HTML #CSS #JS
                </h6>
                <p className="text-gray-500">
                  Simple Frontend E - Commerce WebPage using HTML CSS and JS
                </p>
              </div>
            </div>
            <div>
              <img
                alt="img"
                className="w-full rounded-[20px] object-fill"
                src="https://source.unsplash.com/random/320x240"
              />
              <div className="flex flex-col items-center text-center ">
                <h5 className="text-lg font-bold mb-3">E - Commerce WebPage</h5>
                <h6 className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                  #HTML #CSS #JS
                </h6>
                <p className="text-gray-500">
                  Simple Frontend E - Commerce WebPage using HTML CSS and JS
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Box;
