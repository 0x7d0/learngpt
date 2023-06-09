import Image from "next/image";
import React from "react";
import Button from "./Button";
import { VscDebugStart } from "react-icons/vsc";
import { CgLock } from "react-icons/cg";
import { CiCircleQuestion } from "react-icons/ci";
import Link from "next/link";

const CourseCard = ({ title, url, canAccess }) => {
  const id = url.split("v=")[1].substring(0, 11);
  const disabled = !canAccess;

  return (
    <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-md shadow-gray-700 mb-6 text-black">
      {disabled && (
        <div className="absolute top-0  left-0 w-full h-full bg-gray-200 opacity-50 flex items-center justify-center">
          <CgLock size={72} className="text-white hover:animate-pulse" />
        </div>
      )}
      <div
        className={`flex gap-2 ${
          disabled ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <Image
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          width={380}
          height={220}
          alt={title}
        />
        <div className="p-4 flex flex-col items-stretch justify-stretch">
          <div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius; dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare.
            </p>
          </div>
          <div className="py-4 flex justify-end gap-2 mt-auto">
            <Button disabled={disabled} secondary>
              <CiCircleQuestion size={22} />
              Ask tutor about this course
            </Button>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <Button disabled={disabled}>
                <VscDebugStart />
                Start
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
