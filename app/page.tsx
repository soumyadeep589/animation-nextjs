"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Dog from "../assets/husky.jpg";
import Elephant from "../assets/elephant.jpg";
import BoySmile from "../assets/boySmile.jpg";
import Dolphin from "../assets/dolphin.jpg";
import GirlSmile from "../assets/girlSmile.jpg";
import Mountain from "../assets/mountain.jpg";
import Robot from "../assets/robot.jpg";
import Clouds from "../assets/clouds.jpg";

gsap.registerPlugin(ScrollTrigger);

const animateWords = (selector: string) => {
  const elements = document.querySelectorAll(selector);

  if (elements.length > 0) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector, // Trigger animation when the container scrolls into view
          start: "top 80%", // Start when the top of the container is 80% into the viewport
          end: "bottom 30%", // End when the bottom of the container is 20% into the viewport
          scrub: true, // Sync animation with scroll
        },
      })
      .to(elements, {
        opacity: 1,
        y: 0, // Remove vertical offset
        stagger: 0.1, // Add delay between animations for each word
        duration: 0.5,
        ease: "power2.out",
      });
  }
};

const useIntersectionObserver = (sections) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((selector: unknown, index: SetStateAction<null>) => {
      const section = document.querySelector(selector);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sections]);

  return activeIndex;
};

export default function Home() {
  const navItems = [
    "What's new",
    "Benchmarks",
    "Capabilities",
    "Doodles to masterpieces",
    "Versatility & understanding",
    "Details & precision",
    "Safety",
  ];

  const sectionSelectors = navItems.map((_, index) => `.section-${index}`);

  // Use the custom hook to get the active index
  const activeIndex = useIntersectionObserver(sectionSelectors);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Animate heading, text, and buttons
    tl.from(".heading", { y: 50, opacity: 0 })
      .from(".subtext", { y: 50, opacity: 0 }, "-=0.8")
      .from(".button", { y: 50, opacity: 0 }, "-=0.6")
      .from(
        ".image",
        {
          y: 100,
          opacity: 0,
          rotateY: 75,
          transformOrigin: "center",
          duration: 5,
        },
        "-=0.8"
      );
    animateWords(".text-container span");
  }, []);
  return (
    <div>
      <article>
        <div className="min-h-screen bg-white flex flex-col items-center justify-center space-y-6 font-sans">
          <div className="flex space-x-4 absolute top-[-10%] left-[58%] transform -translate-x-1/2 z-10">
            <div className="image">
              <Image
                src={Dog}
                alt="Image Dog"
                width={200}
                height={150}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <div className="flex space-x-4 absolute top-[-1%] left-[35%] transform -translate-x-1/2 z-10">
            <div className="image">
              <Image
                src={Elephant}
                alt="Image Elephant"
                width={290}
                height={150}
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="flex space-x-4 absolute top-[8%] left-[21%] transform -translate-x-1/2 z-5">
            <div className="image filter blur-sm">
              <Image
                src={BoySmile}
                alt="Image Boy Smile"
                width={150}
                height={80}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <div className="flex space-x-4 absolute top-[12%] left-[78%] transform -translate-x-1/2 z-5">
            <div className="image filter blur-sm">
              <Image
                src={Dolphin}
                alt="Image Boy Smile"
                width={150}
                height={80}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <div className="flex space-x-4 absolute top-[42%] left-[78%] z-10">
            <div className="image">
              <Image
                src={GirlSmile}
                alt="Image Girl Smile"
                width={350}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <div className="flex space-x-4 absolute top-[78%] left-[45%] z-10">
            <div className="image">
              <Image
                src={Mountain}
                alt="Image Mountain"
                width={350}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <div className="flex space-x-4 absolute top-[58%] left-[10%] z-10">
            <div className="image">
              <Image
                src={Robot}
                alt="Image Robot"
                width={300}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <div className="flex space-x-4 absolute top-[80%] left-[-5%] z-5">
            <div className="image filter blur-sm">
              <Image
                src={Clouds}
                alt="Image Clouds"
                width={300}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <h1 className="text-8xl font-regular text-gray-900 heading">
            Imagen 3
          </h1>

          <p className="text-lg text-gray-600 subtext">
            Our highest quality text-to-image model
          </p>

          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium px-3 py-3 rounded-full shadow hover:from-blue-600 hover:to-cyan-600 button">
              <span className="flex items-center">
                Try it on Gemini
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
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </span>
            </button>

            <button className="border border-cyan-500 text-black font-medium px-3 py-3 rounded-full hover:border-cyan-600 hover:text-cyan-600 button">
              <span className="flex items-center">
                Try it on Vertex AI
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
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </article>
      <section className="min-h-screen block m-auto max-w-[53rem] w-full flex items-center justify-center">
        <div className="text-container text-[3rem] font-sans font-normal tracking-[-0.5px] leading-[1.1666666667] text-gray-900 text-center break-words overflow-wrap-normal bg-clip-text bg-gradient-blue-green">
          <p>
            <span>Imagen 3 is our </span>
            <span>
              <strong>highest quality </strong>
            </span>
            <span>text-to-image </span>
            <span>model, capable of generating images with </span>
            <span>
              <strong>even better detail</strong>
            </span>
            <span>, </span>
            <span>
              <strong>richer lighting </strong>
            </span>
            <span>and </span>
            <span>
              <strong>fewer distracting artifacts </strong>
            </span>
            <span>than our previous models.</span>
          </p>
        </div>
      </section>
      <div className="max-w-[95%] w-fit sticky top-5 z-100 flex bg-gray-200 border border-gray-300 rounded-[120px] shadow-none overflow-hidden my-4 mx-auto  box-border font-sans font-medium text-[1rem] leading-5">
        <ul className="flex w-auto my-0 mx-auto overflow-auto p-0.5 whitespace-nowrap items-center justify-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`list-item px-4 py-2 ${
                activeIndex === index
                  ? "bg-gradient-blue-green bg-clip-padding text-white"
                  : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`section-${index} min-h-[800px] bg-red-300`}
          >
            Section {index + 1}: {item}
          </div>
        ))}
      </div>
    </div>
  );
}
