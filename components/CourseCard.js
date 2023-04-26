import Image from "next/image";
import React from "react";
import Button from "./Button";
import { VscDebugStart } from "react-icons/vsc";
import { CgLock } from "react-icons/cg";
import { CiCircleQuestion } from "react-icons/ci";
import Link from "next/link";

const LEVEL_COLORS = {
  beginner: "bg-green-500",
  intermediate: "bg-yellow-500",
  advanced: "bg-red-500",
};

const LEVEL_EXPERIENCE_POINTS = {
  beginner: 100,
  intermediate: 250,
  advanced: 500,
};

const CourseCard = ({ title, url, canAccess, level }) => {
  const id = url.split("v=")[1].substring(0, 11);
  const disabled = !canAccess;
  const levelColor = LEVEL_COLORS[level];
  const experiencePoints = LEVEL_EXPERIENCE_POINTS[level];

  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md mb-6">
      {disabled && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 opacity-50 flex items-center justify-center">
          <CgLock size={72} className="text-black hover:animate-pulse" />
        </div>
      )}
      <a
        className={`flex gap-2 ${disabled ? "opacity-50 pointer-events-none" : ""}`}
      >
        <div className="relative">
          <Image
            src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
            width={380}
            height={220}
            alt={title}
          />
          <div
            className={`absolute top-2 right-2 py-1 px-2 rounded-full text-white text-sm font-medium ${levelColor}`}
          >
            {level.toUpperCase()} +{experiencePoints} XP
          </div>
        </div>
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
            <Link href={url} target="_blank" rel="noopener noreferrer" className="flex">
              <Button disabled={disabled}>
                <VscDebugStart />
                Start
              </Button>
            </Link>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CourseCard;
