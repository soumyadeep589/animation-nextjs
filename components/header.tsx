import React from "react";
import Image from "next/image";
import GoogleIcon from "../assets/googleIcon.png";

const header = () => {
  return (
    <header className="top-0 left-0 w-full z-50 relative font-sans">
      <nav className="bg-white border-gray-200 px-2 py-4 dark:bg-gray-800">
        <div className="flex justify-between items-center">
          <div className="flex items-center basis-1/8">
            <Image src={GoogleIcon} alt="Image Dog" width={100} />
            <span className="text-xl text-gray-600">DeepMind</span>
          </div>
          <div className="basis-3/8 px-6 mx-4 text-gray-600">
            <nav className="flex">
              <ul className="flex justify-start space-x-4">
                <li>
                  <span className="flex items-center space-x-1.5">
                    <h5>About</h5>
                    <svg
                      className="w-5 h-5 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="flex items-center space-x-1.5">
                    <h5>Research</h5>
                    <svg
                      className="w-5 h-5 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="flex items-center space-x-1.5">
                    <h5>Technologies</h5>
                    <svg
                      className="w-5 h-5 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="flex items-center space-x-1.5">
                    <h5>Discover</h5>
                    <svg
                      className="w-5 h-5 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="basis-1/2">
            <div className="float-end">
              <svg
                className="w-[22px] h-[22px] text-gray-600 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="1.6"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
