import Image from "next/image";
import ExperienceCard from "../_components/ExperienceCard";
import illustration from "@/public/assets/about-illustration.svg";
import { Education, Info } from "../_lib/userInfo";

function page() {
  return (
    <main className="py-20 px-10 xl:px-32 flex flex-col gap-20">
      <div className="flex flex-col gap-7">
        <h1 className="text-3xl xl:text-5xl font-bold animate-pulse">
          About Me
        </h1>
        <div className="flex flex-col-reverse xl:flex-row justify-between items-center">
          <p className="text-sm  sm:text-base leading-8 xl:w-1/2 flex flex-col gap-5 sm:gap-3">
            <span>
              Hello! I’m a passionate web developer with a strong focus on
              building dynamic and responsive web applications using Next.js,
              React, Tailwind CSS, and others stuff. With a keen eye for detail
              and a commitment to delivering high-quality code, I strive to
              create seamless user experiences and visually appealing
              interfaces.
            </span>

            <span>
              I enjoy tackling complex problems and continuously learning new
              technologies to stay at the forefront of web development. Whether
              it’s optimizing performance, enhancing accessibility, or
              implementing the latest design trends, I am dedicated to pushing
              the boundaries of what’s possible on the web.
            </span>

            <span>
              When I’m not coding, you can find me exploring new tech trends,
              contributing to open-source projects, or sharing my knowledge with
              the developer community. Let’s connect and create something
              amazing together!
            </span>
          </p>
          <div className="relative h-[300px] xl:h-[500px] aspect-square">
            <Image
              fill
              alt="illustration"
              src={illustration}
              className="object-cover pointer-events-none"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <h1 className="text-xl sm:text-3xl xl:text-5xl font-bold animate-pulse">
          Work Experience
        </h1>
        <div className="flex flex-col gap-10 py-10">
          {Info.map((data) => (
            <ExperienceCard data={data} key={data.id} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <h1 className="text-xl sm:text-3xl xl:text-5xl font-bold animate-pulse">
          Education
        </h1>
        <div className="flex flex-col gap-10 py-10">
          {Education.map((data) => (
            <ExperienceCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default page;
