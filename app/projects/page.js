import ProjectCard from "../_components/ProjectCard";
import { getProjects } from "../_lib/projects";

export const metadata = {
  title: "Welcome to my projects page",
  description: "Hi, its Adel Yasser and welcome to my Projects",
};

async function page() {
  const projects = await getProjects();

  return (
    <main className="py-20 px-7 sm:px-14 lg:px-32 flex flex-col items-start gap-5 xl:gap-7 w-full">
      <h1 className="font-bold text-2xl xl:text-5xl">Projects</h1>
      <p className="text-xl xl:text-2xl text-dark-gray-800">
        Things I’ve built so far
      </p>

      <div className="flex items-center flex-col xl:flex-row gap-10 flex-wrap justify-center w-full">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </main>
  );
}

export default page;
