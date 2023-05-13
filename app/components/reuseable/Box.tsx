import "./Box.css";
import Image from "next/image";

const Box = () => {
  return (
    <>
      <section>
        <div>
          <div className="text-gray-800 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-center py-5">
              Projects I have worked on
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-6 py-10">
              {/* 1 */}
              <div className="mb-12 lg:mb-0 py-2">
                <div className="style-1 shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6 ">
                  <Image
                    src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                    className="w-full"
                    width={10}
                    height={10}
                    alt="img"
                  />
                  <a href="#">
                    <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
                <h5 className="text-lg font-bold mb-3">Hollywood Exhibition</h5>
                <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                    />
                  </svg>
                  Hot news
                </div>
                <p className="text-gray-500">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
              </div>
              {/* 2 */}

              <div className="mb-12 lg:mb-0 py-2">
                <div className="style-1 shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6 ">
                  <Image
                    src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                    className="w-full"
                    width={10}
                    height={10}
                    alt="img"
                  />
                  <a href="#">
                    <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
                <h5 className="text-lg font-bold mb-3">Hollywood Exhibition</h5>
                <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                    />
                  </svg>
                  Hot news
                </div>
                <p className="text-gray-500">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
              </div>
              {/* 3 */}

              <div className="mb-12 lg:mb-0 py-2">
                <div className="style-1 shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6 ">
                  <Image
                    src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                    className="w-full"
                    width={10}
                    height={10}
                    alt="img"
                  />
                  <a href="#">
                    <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
                <h5 className="text-lg font-bold mb-3">Hollywood Exhibition</h5>
                <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                  <svg
                    className="w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="currentColor"
                      d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
                    />
                  </svg>
                  Hot news
                </div>
                <p className="text-gray-500">
                  Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                  placerat vulputate. Ut vulputate est non quam dignissim
                  elementum. Donec a ullamcorper diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Box;
