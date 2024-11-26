"use client";
import Image from "next/image";
import Link from "next/link";
import { IoLink } from "react-icons/io5";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../_lib/sanity";
import { useState } from "react";

const { projectId, dataset } = client.config();

const urlFor = (source) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

function ProjectCard({ project }) {
  const {
    title,
    description,
    url: { demo, repo },
    stack,
  } = project;
  const image = project.image ? urlFor(project.image)?.url() : null;
  const [short, setShortOverview] = useState(true);

  const overviewText = short ? description.slice(0, 50) + " ... " : description;

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 lg:min-h-[500px] xl:w-[calc(100%_/_3_-_50px)] xl:min-h-[550px] bg-[#363636] pb-10 rounded-lg flex flex-col justify-between duration-500 hover:scale-105">
      <div className="relative w-full aspect-video">
        <Image
          src={image}
          fill
          alt={description}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="flex flex-col gap-4 px-5 py-3 sm:px-7">
        <h1 className="text-xl font-medium capitalize lg:text-lg xl:text-xl">
          {title}
        </h1>
        <p className="text-base font-light sm:text-lg lg:text-base text-dark-gray-500">
          {overviewText}
          <span
            onClick={() => setShortOverview((prev) => !prev)}
            className="text-green-600 underline cursor-pointer"
          >
            {short ? "More" : " Less"}
          </span>
        </p>
        {short && (
          <h3>
            Tech stack :
            {stack.map((tech) => (
              <span className="text-xs text-dark-gray-500" key={tech}>
                {" "}
                {tech},{" "}
              </span>
            ))}
          </h3>
        )}
      </div>
      <div className="flex flex-row items-center justify-between px-5 sm:px-7">
        <Link
          target="blank"
          className="flex items-center gap-2 text-xs underline sm:text-lg md:text-sm lg:text-xs xl:text-lg"
          href={demo}
        >
          <span className="no-underline	text-[20px] ">
            <IoLink />
          </span>
          Live Preview
        </Link>
        <Link
          target="blank"
          className="flex items-center gap-2 text-xs underline sm:text-lg md:text-sm lg:text-xs xl:text-lg"
          href={repo}
        >
          <span className="no-underline	text-[20px] ">
            <IoLink />
          </span>
          View Code
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
