import React from "react";

const header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex-1">
            <span className="">Google</span>
            <span className="">DeepMind</span>
          </div>
          <div className="w-3/4">
            <nav className="flex ">
              <ul className="flex justify-start space-x-4">
                <li>
                  <span className="flex">
                    <strong>About</strong>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
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
                  <span className="flex">
                    <strong>Research</strong>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
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
                  <span className="flex">
                    <strong>Technology</strong>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
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
                  <span className="flex">
                    <strong>Discover</strong>
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
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
          <div className="flex-1">
            <svg
              className="w-[22px] h-[22px] text-gray-800 dark:text-white"
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
      </nav>
    </header>
  );
}

export default header;
