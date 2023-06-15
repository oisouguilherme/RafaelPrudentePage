"use client";
import Image from "next/image";

export function SlideCard({ image, year, text }: any) {
  return (
      <div className="flex w-full sm:w-96 py-12 flex-col gap-8 justify-center relative">
        <div className="flex flex-col items-center absolute top-1 left-32">
          <p className="text-2xl font-semibold">{year}</p>
          <div className="w-6 h-6 bg-laranja-1 rounded-full"></div>
        </div>
        <div className="w-96 border-2 border-laranja-1"></div>
        <div className="w-80 bg-white rounded-lg">
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
