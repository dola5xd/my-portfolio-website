"use client";
import Image from "next/image";
import Link from "next/link";
import { IoLink } from "react-icons/io5";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../_lib/sanity";

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

  return (
    <div className="lg:w-[calc(100%_/_3_-_50px)] h-[550px]sm:h-[500px] bg-[#363636] pb-10 rounded-lg flex flex-col justify-between duration-500 hover:scale-105">
      <div className="relative w-full aspect-video">
        <Image
          src={image}
          fill
          alt={description}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="px-5 sm:px-7 flex flex-col gap-4 py-3 sm:py-0">
        <h1 className="font-medium text-xl capitalize">{title}</h1>
        <p className="font-light text-base sm:text-lg text-dark-gray-500">
          {description}
        </p>
        <h3>
          Tech stack :
          {stack.map((tech) => (
            <span className="text-dark-gray-500 text-sm" key={tech}>
              {" "}
              {tech},{" "}
            </span>
          ))}
        </h3>
      </div>
      <div className="flex flex-row items-center justify-between px-5 sm:px-7">
        <Link
          target="blank"
          className="underline flex items-center gap-2 text-xs sm:text-lg"
          href={demo}
        >
          <span className="no-underline	text-[20px]">
            <IoLink />
          </span>
          Live Preview
        </Link>
        <Link
          target="blank"
          className="underline flex items-center gap-2 text-xs sm:text-lg"
          href={repo}
        >
          <span className="no-underline	text-[20px]">
            <IoLink />
          </span>
          View Code
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;