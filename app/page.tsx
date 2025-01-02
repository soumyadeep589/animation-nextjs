"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import Image from "next/image";
import Dog from "../assets/husky.jpg";
import Elephant from "../assets/elephant.jpg";
import BoySmile from "../assets/boySmile.jpg";
import Dolphin from "../assets/dolphin.jpg";
import GirlSmile from "../assets/girlSmile.jpg";
import Mountain from "../assets/mountain.jpg";
import Robot from "../assets/robot.jpg";
import Clouds from "../assets/clouds.jpg";

export default function Home() {
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
  }, []);
  return (
    <div className="overflow-hidden">
      <main>
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
            <div className="flex space-x-4 absolute top-[6%] left-[21%] transform -translate-x-1/2 z-5">
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
            <div className="flex space-x-4 absolute top-[10%] left-[78%] transform -translate-x-1/2 z-5">
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
            <div className="flex space-x-4 absolute top-[40%] left-[78%] z-10">
              <div className="image">
                <Image
                  src={GirlSmile}
                  alt="Image Girl Smile"
                  width={350}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div className="flex space-x-4 absolute top-[75%] left-[45%] z-10">
              <div className="image">
                <Image
                  src={Mountain}
                  alt="Image Mountain"
                  width={350}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
            <div className="flex space-x-4 absolute top-[55%] left-[10%] z-10">
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
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium px-6 py-3 rounded-full shadow hover:from-blue-600 hover:to-cyan-600 button">
                Try it on Gemini →
              </button>

              <button className="border border-cyan-500 text-black font-medium px-6 py-3 rounded-full hover:border-cyan-600 hover:text-cyan-600 button">
                Try it on Vertex AI →
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
