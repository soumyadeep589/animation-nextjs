import React from "react";
import Image from "next/image";
import "flowbite";

const carousel = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-90 overflow-hidden md:h-[70rem]">
        <div className="duration-700 ease-in-out" data-carousel-item="active">
          <Image
            className="rounded-[24px]"
            src="https://lh3.googleusercontent.com/opH90-5Zr9VTsEsUDAIhPopVnlIKXyusfFMyAetV7GUsrHbrvXO-zvWUi8lR73zqvqWZX12aD2hzOAl7lEOmKofNZowYtqXFLttIz-V6VOmKoe1oz7k=h600"
            alt="carousel bird"
            width={1100}
            height={400}
          />
          <div className="mx-56 my-6">
            <p className="text-neutralGray font-normal text-sm">
              <strong>Prompt:</strong> A close-up, macro photography stock photo
              of a strawberry intricately sculpted into the shape of a
              hummingbird in mid-flight, its wings a blur as it sips nectar from
              a vibrant, tubular flower. The backdrop features a lush, colorful
              garden with a soft, bokeh effect, creating a dreamlike atmosphere.
              The image is exceptionally detailed and captured with a shallow
              depth of field, ensuring a razor-sharp focus on the
              strawberry-hummingbird and gentle fading of the background. The
              high resolution, professional photographers style, and soft
              lighting illuminate the scene in a very detailed manner,
              professional color grading amplifies the vibrant colors and
              creates an image with exceptional clarity. The depth of field
              makes the hummingbird and flower stand out starkly against the
              bokeh background.
            </p>
          </div>
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            className="rounded-[24px]"
            src="https://lh3.googleusercontent.com/2Hj_bKxVhplS5KceFjGfBkXnMqurkUilBO-ohp-ilItQAw7_EhSuEp8LAUXcQU85UgXV9w-_bOrjRzLQlSxVgti76DO7OwZ4R9sI_wBsZjpim7Ri0Q=h600"
            alt="carousel girl"
            width={1100}
            height={100}
          />
          <div className="mx-56 my-6">
            <p className="text-neutralGray font-normal text-sm">
              <strong>Prompt:</strong> A close-up, macro photography stock photo
              of a strawberry intricately sculpted into the shape of a
              hummingbird in mid-flight, its wings a blur as it sips nectar from
              a vibrant, tubular flower. The backdrop features a lush, colorful
              garden with a soft, bokeh effect, creating a dreamlike atmosphere.
              The image is exceptionally detailed and captured with a shallow
              depth of field, ensuring a razor-sharp focus on the
              strawberry-hummingbird and gentle fading of the background. The
              high resolution, professional photographers style, and soft
              lighting illuminate the scene in a very detailed manner,
              professional color grading amplifies the vibrant colors and
              creates an image with exceptional clarity. The depth of field
              makes the hummingbird and flower stand out starkly against the
              bokeh background.
            </p>
          </div>
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item>
          <Image
            className="rounded-[24px]"
            src="https://lh3.googleusercontent.com/8vHM9k2G899u1uVD_0WE57Qo8Y7DqefH0FQ0isL30AVYbCJbcc-Z5GrbquhrETmAZbnR8WQrahNuU0icd_uMPLxKClRn8ZQdz9lBpMNBEMaG-MkOlw=h600"
            alt="carousel mice"
            width={1100}
            height={100}
          />
          <div className="mx-56 my-6">
            <p className="text-neutralGray font-normal text-sm">
              <strong>Prompt:</strong> A close-up, macro photography stock photo
              of a strawberry intricately sculpted into the shape of a
              hummingbird in mid-flight, its wings a blur as it sips nectar from
              a vibrant, tubular flower. The backdrop features a lush, colorful
              garden with a soft, bokeh effect, creating a dreamlike atmosphere.
              The image is exceptionally detailed and captured with a shallow
              depth of field, ensuring a razor-sharp focus on the
              strawberry-hummingbird and gentle fading of the background. The
              high resolution, professional photographers style, and soft
              lighting illuminate the scene in a very detailed manner,
              professional color grading amplifies the vibrant colors and
              creates an image with exceptional clarity. The depth of field
              makes the hummingbird and flower stand out starkly against the
              bokeh background.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        {/*
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button> */}
      </div>
      <button
        type="button"
        className="absolute -top-60 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute -top-60 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default carousel;
