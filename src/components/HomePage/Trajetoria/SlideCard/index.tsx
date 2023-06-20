"use client";
import Image from "next/image";

export function SlideCard({ image, year, text }: any) {
  return (
      <div data-aos="zoom-out" className="flex w-full sm:w-96 py-12 flex-col gap-8 justify-center">
        <div className="w-96 border-2 border-laranja-1"></div>
        <div className="w-72  sm:w-80 bg-white rounded-lg relative">
        <div className="flex flex-col items-center absolute right-32 sm:right-36 -top-20">
          <p className="text-2xl font-semibold">{year}</p>
          <div className="w-6 h-6 bg-laranja-1 rounded-full"/>
        </div>
          <Image src={image} alt="Rafael" className="w-full" />
          <div className="p-8 space-y-4">
            <p>
              {text}
            </p>
          </div>
        </div>
      </div>
  );
}
