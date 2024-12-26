"use client";
import { gsap } from "gsap";
import { useEffect } from "react";
import Image from "next/image";
import Dog from "../assets/husky.jpg";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    // Animate heading, text, and buttons
    tl.from(".heading", { y: 50, opacity: 0 })
      .from(".subtext", { y: 50, opacity: 0 }, "-=0.8")
      .from(".button", { y: 50, opacity: 0 }, "-=0.6")
      .from(
        ".image",
        { y: 50, opacity: 0, rotateY: -60, transformOrigin: "center" },
        "-=0.8"
      );
  }, []);
  return (
    <div className="pt-16 overflow-hidden">
      <main>
        <article>
          <div className="min-h-screen bg-white flex flex-col items-center justify-center space-y-6 font-sans">
            <div className="flex space-x-4 absolute top-0 left-1/2 transform -translate-x-1/2">
              <div className="image">
                <Image
                  src={Dog}
                  alt="Image 1"
                  width={200}
                  height={200}
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
