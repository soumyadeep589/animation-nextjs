"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import Image from "next/image";
import Dog from "../assets/husky.jpg";
import Elephant from "../assets/elephant.jpg";
import BoySmile from "../assets/boySmile.jpg";
import Dolphin from "../assets/dolphin.jpg";
import GirlSmile from "../assets/girlSmile.jpg";
import Mountain from "../assets/mountain.jpg";
import Robot from "../assets/robot.jpg";
import Clouds from "../assets/clouds.jpg";

import Carousel from "@/components/carousel";

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

const animateItems = (selector: string) => {
  // Target elements and create staggered animation
  gsap.utils.toArray<HTMLElement>(selector).forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 50, // Start slightly below
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: item, // Element to trigger the animation
          start: "top 99%", // When the top of the element hits 80% of the viewport
          toggleActions: "play none none none", // Play the animation when entering
        },
      }
    );
  });
};

const useIntersectionObserver = (sections: string[]): number | null => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((selector, index) => {
      const section = document.querySelector(selector);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.4 }
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
    animateItems(".animate-item");
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
      <section className="min-h-screen block m-auto max-w-[58rem] w-full flex items-center justify-center">
        <div className="text-container text-[2.8rem] font-sans font-normal tracking-[-0.5px] leading-[1.1666666667] text-gray-900 text-center break-words overflow-wrap-normal bg-clip-text bg-gradient-blue-green text-balance">
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
      <div className="max-w-[95%] w-fit sticky top-5 z-50 flex bg-gray-200 border border-gray-300 rounded-[120px] shadow-none overflow-hidden my-4 mx-auto  box-border font-sans font-medium text-[1rem] leading-5">
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
      <div className="">
        <div className="section-0 min-h-[800px] font-sans">
          <div className="section-title my-40 mx-auto max-w-[53rem] w-full text-center">
            <h2 className="text-5xl mb-8 animate-item">What&apos;s new?</h2>
            <div className="max-w-[32rem] m-auto text-wrap leading-relaxed animate-item">
              <p className="text-gray-500">
                The latest iteration of Imagen 3 brings marked improvements to
                its capabilities.
              </p>
            </div>
            <div className="my-8 animate-item">
              <a className="px-3 py-2 bg-gradient-blue-green bg-clip-padding text-white list-item font-medium">
                Try the latest on ImageFX
                <svg
                  className="w-5 h-5 dark:text-white ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                  />
                </svg>
              </a>
            </div>
          </div>
          <section className="my-20 mx-16 font-sans">
            <ul className="flex items-center justify-between gap-10">
              <li className="flex-1">
                <div className="border rounded-[24px] text-center break-words">
                  <Image
                    src="https://lh3.googleusercontent.com/Q9k1l01kBREgNbcRcU2u6E1-6j1wIZArm9gQREMFuTKSJF5bhMt3208H4xElDfItsja29aQVQ76ZyvBCQ4ToF7pZygxzPOFhLFMLJG7iMmb5OfzvUA=w415"
                    alt="Image brightness"
                    width={415}
                    height={233}
                  />
                  <div className="p-6">
                    <p className="font-normal text-[1.25rem]">
                      Brightness and vibrancy
                    </p>
                    <div className="my-3">
                      <p className="text-neutralGray">
                        Several advancements to our model have, together,
                        resulted in better overall color balance.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex-1">
                <div className="border rounded-[24px] text-center break-words">
                  <Image
                    src="https://lh3.googleusercontent.com/F37WBTKXQZMj4vqd5ASgeQ3wGcnKwXSM5p79SuEsJfwRaZ_zrOtkwXJ9FHwmIO8_IwJQ_swefYqLNuUMuGdD0Fvo0wWwTjR6i7Gho1uCBq-D8gO1=w415"
                    alt="Image brightness"
                    width={415}
                    height={233}
                  />
                  <div className="p-6">
                    <p className="font-normal text-[1.25rem]">
                      Diverse art styles
                    </p>
                    <div className="my-3 overflow-hidden">
                      <p className="text-neutralGray">
                        Imagen can now render diverse art styles with greater
                        accuracy - from photo realism to impressionism, and from
                        abstract to anime.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex-1">
                <div className="border rounded-[24px] text-center break-words">
                  <Image
                    src="https://lh3.googleusercontent.com/k1UeUjQ1psbbA8lt2gyO0MdC22WMjxmY0jSahrkcIg_NsqR2u4Zm_DWPTGOh_K5aS_wcf-uYcenAhT2ViMa2Lj_yJt4zS-LMV7MjrFUHnbJ1eSh_JLI=w415"
                    alt="Image brightness"
                    width={415}
                    height={233}
                  />
                  <div className="p-6">
                    <p className="font-normal text-[1.25rem]">
                      High-fidelity detail
                    </p>
                    <div className="my-3 overflow-hidden">
                      <p className="text-neutralGray">
                        Richer textures and enhanced details result in more
                        visually compelling images.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <div className="my-[80px] mx-auto max-w-[66rem] relative">
            <Carousel />
          </div>
        </div>
        <div className="section-1 min-h-[800px]">
          <div className="section-title text-center font-sans">
            <h2 className="text-[3rem] text-textBlack mb-6 animate-item">
              Benchmarks
            </h2>
            <div className="max-w-[40rem] mx-auto">
              <p className="text-neutralGray text-lg text-pretty animate-item">
                Human evaluators prefer the newest version of Imagen 3 to
                previous versions of the model and to other leading image
                generation models.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 max-w-[65rem] my-36 mx-auto">
            <figure>
              <Image
                className="rounded-[24px]"
                src="https://lh3.googleusercontent.com/8V6t82Ivl61Q8ojDAMHsDkH11hdgGmxqtgLk6MpIlfQ8biROYbTY1nQ31AJHhKmmN5UOcCvKdwp2FgAG-MlYC-vxuhMiyPHRoV2q7CHKEdeE4KZXGA=w512"
                alt="Image brightness"
                width={500}
                height={233}
              />
              <figcaption className="mt-4">
                <p className="text-neutralGray text-sm">
                  Human evaluation on GenAI-Bench: Elo scores on overall
                  preference benchmark for Imagen 3 vs other models.
                </p>
              </figcaption>
            </figure>
            <figure>
              <Image
                className="rounded-[24px]"
                src="https://lh3.googleusercontent.com/M-GB-3G6i72JR-KbgRWxpqG-uteQiTinWMbeZsNygy0caDyuO5YOhE1T3QoKOZt_DEZoRDlcQ0DECHJy-mpjPSQzp8GO008MdPhyck8Gwmpo4sQInA=w512"
                alt="Image brightness"
                width={500}
                height={233}
              />
              <figcaption className="mt-4">
                <p className="text-neutralGray text-sm">
                  Human evaluation on GenAI-Bench: win-rate percentages for
                  overall preference of Imagen 3 vs other models.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-[36rem] my-24 mx-auto text-neutralGray font-sans">
            <p>
              Imagen 3 also holds the highest score for visual quality, meaning
              its images are appealing and largely artifact-free. Evaluators
              also scored it highly for its ability to respond accurately to
              prompts.
            </p>
            <p className="mt-4">
              Further details on these scores, our methodology and performance
              improvements are available in Appendix D of our updated technical
              report.
            </p>
          </div>
          <section className="max-w-[36rem] mx-auto font-sans">
            <ul className="flex items-center justify-center">
              <li>
                <button className="flex items-center justify-center hover:bg-red-400 bg-gradient-aqua py-3 px-4 text-textBlack rounded-[24px] text-base font-medium  hover:shadow-lg">
                  View tech report
                  <svg
                    className="w-5 h-5 dark:text-white ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </section>
        </div>
        <div className="section-2 min-h-[800px] mx-16">
          <div className="section-title my-48 mx-auto max-w-[50rem] text-center font-sans">
            <h2 className="text-[3rem] text-textBlack mb-6 animate-item">
              Greater detail, fewer artifacts
            </h2>
            <div className="max-w-[40rem] mx-auto">
              <p className="text-neutralGray text-lg text-pretty animate-item">
                We’ve significantly improved Imagen 3’s ability to understand
                prompts, which helps the models generate a wide range of visual
                styles and capture small details from longer prompts.
              </p>
            </div>
          </div>
          <section className="my-20 mx-8 font-sans">
            <ul className="flex items-center justify-between gap-10">
              <li className="flex-1">
                <div className="border rounded-[24px] text-center break-words">
                  <Image
                    src="https://lh3.googleusercontent.com/Xhpbk7xqTBPjDMw0PxnbNi_HGc1CG9m7TBhb6R1JoHztRiRhB0VGJ-R7xXnrAKTFXhqu19zBFLgfeJMwHkILDKENhZE1s_V0FYbRwIZuiq98G4mhq-Q=w415"
                    alt="Image brightness"
                    width={415}
                    height={233}
                  />
                  <div className="p-6">
                    <p className="font-normal text-[1.25rem]">
                      Greater versatility and prompt understanding
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex-1">
                <div className="border rounded-[24px] text-center break-words">
                  <Image
                    src="https://lh3.googleusercontent.com/6B5hfy13ykA6xbq1edI8qy-y6VS76PaEdfG-n3yuIrDybdvSGXAqaTS0KGMgGjhhRDkn3vjZEFiTTQS-HHG0ToaHsiTkuWuaN5XK8ulA4CGN6_HqOg=w415"
                    alt="Image brightness"
                    width={415}
                    height={233}
                  />
                  <div className="p-6">
                    <p className="font-normal text-[1.25rem]">
                      Higher quality images
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex-1">
                <div className="border rounded-[24px] text-center break-words">
                  <Image
                    src="https://lh3.googleusercontent.com/F44blJXoE6iox_RBcatqqq69d_541pe5HaqSB9jETqPMUgr2Jl4Mb6GgpO_yEUhTMTxDWIuT0JdHRaU9GGYh6ECDObgIL6eoRaw0MUi1yRWePMApIg=w415"
                    alt="Image brightness"
                    width={415}
                    height={233}
                  />
                  <div className="p-6">
                    <p className="font-normal text-[1.25rem]">
                      Better text rendering
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section className="my-8 mx-auto max-w-[38rem] font-sans animate-item">
            <ul className="flex items-center justify-center gap-4">
              <li>
                <button className="flex items-center justify-center hover:bg-red-400 bg-gradient-blue-green py-3 px-4 text-white rounded-[24px] text-base font-medium  hover:shadow-lg">
                  Try it on Gemini
                  <svg
                    className="w-5 h-5 dark:text-white ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <button className="flex items-center justify-center hover:bg-red-400 bg-gradient-aqua py-3 px-4 text-textBlack rounded-[24px] text-base font-medium  hover:shadow-lg">
                  Try it on ImageFX
                  <svg
                    className="w-5 h-5 dark:text-white ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </section>
        </div>
        <div className="section-3 min-h-[800px] mx-16 font-sans">
          <div className="grid grid-cols-12 gap-x-12 my-36">
            <div className="order-2 col-span-6 grid grid-rows-2 grid-cols-2 gap-12">
              <figure className="col-start-2">
                <Image
                  className="rounded-3xl w-full"
                  src="https://lh3.googleusercontent.com/vfb_JXKvDuToH-tq-iaFeHuw256WmjPDVexBRNtdKa3Nm1P6avsDx8YamC64ZVbcmfnmme9aVa1tZ2OM3v2yTLjqRrzzgkeaVfkVpRMr8fcCTXdzHQ=w276"
                  alt="Image girls"
                  width={240}
                  height={233}
                />
                <figcaption className="mt-4">
                  <p className="text-neutralGray font-normal text-sm">
                    <strong>Prompt:</strong> Three women stand together
                    laughing, with one woman slightly out of focus in the
                    foreground. The sun is setting behind the women, creating a
                    lens flare and a warm glow
                  </p>
                </figcaption>
              </figure>
              <figure className="col-start-1 row-start-1 row-end-3 self-center">
                <Image
                  className="rounded-3xl w-full"
                  src="https://lh3.googleusercontent.com/3Eg7pYDZtDqavED1ZJpw-G5TTif7Yd9B__lK0iw8edC0cAJz00AkiiyapMUOAn0Ujcw4CKbRHHJVUd2YYx64Zp00J53OcRxMQBKquQSSdNN9099t7Uk=w276"
                  alt="Image lion"
                  width={240}
                  height={233}
                />
                <figcaption className="mt-4">
                  <p className="text-neutralGray font-normal text-sm">
                    <strong>Prompt:</strong> Detailed illustration of majestic
                    lion roaring proudly in a dream-like jungle, purple white
                    line art background, clipart on light violet paper texture
                  </p>
                </figcaption>
              </figure>
              <figure className="col-start-2">
                <Image
                  className="rounded-3xl w-full"
                  src="https://lh3.googleusercontent.com/SE1Hokc8jI3T-VOT5EO-HmdOnCnjfUe9QnK6okMrDykgI3xWLG1f3Ev0UpD6-6IBcMzU-tesRT8wJmNcxD1lImDtGogBmapo2bYU3JeUWLUhfcVY=w276"
                  alt="Image girls"
                  width={240}
                  height={233}
                />
                <figcaption className="mt-4">
                  <p className="text-neutralGray font-normal text-sm">
                    <strong>Prompt:</strong> Claymation scene. A medium wide
                    shot of an elderly woman. She is wearing flowing clothing.
                    She is standing in a lush garden watering the plants with an
                    orange watering can
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="col-span-6 pr-24 flex items-center justify-center">
              <div className="section-breaker__rich-text gdm-rich-text">
                <h2 className="text-4xl">From Doodles to masterpieces</h2>
                <p className="text-neutralGray text-pretty mt-4">
                  We’ve designed Imagen 3 to generate high-quality images in a
                  wide range of formats and styles, from photorealistic
                  landscapes to richly textured oil paintings or whimsical
                  claymation scenes.
                </p>
              </div>
            </div>
          </div>
          <div className="my-[80px] mx-auto max-w-[66rem]">
            <Carousel />
          </div>
        </div>
        <div className="section-4 min-h-[800px] font-sans">
          <div className="section-title mx-auto max-w-[50rem] text-center">
            <h2 className="text-[3rem] text-textBlack mb-6 animate-item text-balance">
              Greater versatility and prompt understanding
            </h2>
            <div className="m-auto max-w-[38rem] text-neutralGray text-pretty animate-item">
              <p>
                Imagen 3 understands prompts written in natural, everyday
                language, making it easier to get the output you want without
                complex prompt engineering.
              </p>
            </div>
          </div>
          <figure className="mt-16">
            <Image
              className="w-full"
              src="https://lh3.googleusercontent.com/BwWGmk21tm-ED6ALN-5MKULJ96T-9UlLwxOtToqmnyZ-56iHG7KoyBSQImaEqc00tbugmOO-W16r96jFIQNMtqHijR_4qa43hADGm7yJmovAR0D3nA=w1440"
              alt="Image girls"
              width={1440}
              height={233}
            />
            <figcaption className="mt-4 max-w-[39rem] text-balance mx-auto">
              <p className="text-neutralGray font-normal text-sm">
                <strong>Prompt:</strong> A close-up photo of an origami bird
                soaring through a cityscape, in a flock with others of different
                colors and patterns, casting intricate shadows on the buildings
                below
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="section-5 min-h-[800px] mx-16 font-sans">
          <div className="section-title text-center mx-auto my-24 max-w-[52rem]">
            <h2 className="animate-item">
              Trained on details, delivering on precision
            </h2>
            <div className="m-auto max-w-[38rem] text-neutralGray text-pretty animate-item">
              <p>
                To help Imagen 3 capture nuances like specific camera angles or
                compositions in long, complex prompts, we added richer detail to
                the caption of each image in its training data. Given better
                information to learn from, Imagen 3 more accurately generates a
                wide range of subjects and styles.
              </p>
            </div>
          </div>
          <div className="my-[80px] mx-auto max-w-[66rem]">
            <Carousel />
          </div>
          <div className="section-title text-center mx-auto my-24 max-w-[52rem]">
            <h2 className="animate-item">Higher quality images</h2>
            <div className="m-auto max-w-[37rem] text-neutralGray text-pretty animate-item">
              <p>
                Imagen 3 generates visually rich, high-quality images, with good
                lighting and composition. It can accurately render small details
                like the fine wrinkles on a person’s hand, and complex textures
                like a knitted stuffed toy elephant.
              </p>
            </div>
          </div>
          <div className="my-[80px] mx-auto max-w-[66rem]">
            <Carousel />
          </div>
          <div className="grid grid-cols-12 gap-x-12   my-36">
            <div className="col-span-6 grid grid-rows-2 grid-cols-2 gap-12">
              <figure className="col-start-1">
                <Image
                  className="rounded-3xl w-full"
                  src="https://lh3.googleusercontent.com/xA4E8uhxg05lu9EymukImuJGS0269du6DT-PXydUDzMSG-8sGxpPpJxNayh61prxQDjZZdLfaaWGenEo8gPd5vyJY2jaHmOUSLEcni3UX-Yu4eaWuT8=w276"
                  alt="Image girls"
                  width={240}
                  height={233}
                />
                <figcaption className="mt-4">
                  <p className="text-neutralGray font-normal text-sm">
                    <strong>Prompt:</strong> Word “light” made from various
                    colorful feathers, black background
                  </p>
                </figcaption>
              </figure>
              <figure className="col-start-2 row-start-1 row-end-3 self-center">
                <Image
                  className="rounded-3xl w-full"
                  src="https://lh3.googleusercontent.com/Qek__OdMejoZCyxn6dzPhxGjfAPb_0B6rDVCIJJzIRO5B7lQ0bU8aV-FT7jt8l1IxTbF2ZBMYC4RHjbbkbZKtXngs4zIK_HAJXlE9et-FisOsOCDuc8=w276"
                  alt="Image lion"
                  width={240}
                  height={233}
                />
                <figcaption className="mt-4">
                  <p className="text-neutralGray font-normal text-sm">
                    <strong>Prompt:</strong> A single comic book panel of a boy
                    and his father on a grassy hill, staring at the sunset. A
                    speech bubble points from the boy's mouth and says: The sun
                    will rise again. Muted, late 1990s coloring style
                  </p>
                </figcaption>
              </figure>
              <figure className="col-start-1">
                <Image
                  className="rounded-3xl w-full"
                  src="https://lh3.googleusercontent.com/G1NFhjOUEeR7fXd9fmCmc5DI3IVWv-fpbpjA3p14zt23mn_o4ASI68a8rnvp4F-HU4QgSbbbhSd5Fue7LkQB4zFa2TOxg08Xck3TmtrcVsWRRxqWLw=w276"
                  alt="Image girls"
                  width={240}
                  height={233}
                />
                <figcaption className="mt-4">
                  <p className="text-neutralGray font-normal text-sm">
                    <strong>Prompt:</strong> A photograph of a stately library
                    entrance with the words "Central Library" carved into the
                    stone
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="col-span-6 pl-24 flex items-center justify-center">
              <div className="section-breaker__rich-text gdm-rich-text">
                <h2 className="text-4xl">Better text rendering</h2>
                <p className="text-neutralGray text-pretty mt-4">
                  We’ve significantly improved its text rendering capabilities,
                  opening up new possibilities for use cases like stylized
                  birthday cards, presentations and more.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-6 min-h-[800px] bg-red-300">Safety</div>
      </div>
    </div>
  );
}
