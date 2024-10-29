"use client";
import { MdOutlineDateRange, MdLocationPin } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";

function ExperienceCard({ data }) {
  const { title, date, type, location, city } = data;
  return (
    <div className="flex xl:items-center flex-col sm:gap-5 xl:gap-0 xl:flex-row justify-between border-b border-b-dark-gray-500/50 pb-7">
      <div className="flex flex-col sm:gap-4">
        <h1 className="font-bold text-sm sm:text-xl">{title}</h1>
        <div className="flex flex-col sm:flex-row items-center gap-5 py-5 sm:gap-10 justify-between sm:text-nowrap xl:text-balance">
          {location && (
            <h3 className="flex items-center gap-4">
              <span>
                <HiBuildingOffice />
              </span>
              {location}
            </h3>
          )}
          {location && city && (
            <span className="hidden h-7 rounded w-[2px] bg-dark-gray-300 sm:block"></span>
          )}
          {city && (
            <h3 className="flex items-center gap-4">
              <span>
                <MdLocationPin />
              </span>
              {city}
            </h3>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-end gap-7">
        {type && (
          <div className="bg-dark-gray-500 text-dark-background py-2 xl:py-3 px-5 xl:px-7 rounded-3xl font-semibold">
            {type}
          </div>
        )}
        <p className="flex items-center gap-2 sm:gap-7 text-sm xl:text-base">
          <span className="flex items-center gap-2 sm:gap-4 text-nowrap">
            <MdOutlineDateRange />
            {date.from}
          </span>
          <FaArrowRight />
          <span className="flex items-center gap-2 sm:gap-4 text-nowrap">
            <MdOutlineDateRange />
            {typeof date.to === "object" ? "----" : date.to}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;
