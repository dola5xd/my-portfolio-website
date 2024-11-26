import ProjectCard from "../_components/ProjectCard";
import { getProjects } from "../_lib/projects";

export const metadata = {
  title: "Welcome to my projects page",
  description: "Hi, its Adel Yasser and welcome to my Projects",
};

async function page() {
  const projects = await getProjects();

  return (
    <main className="flex flex-col items-start w-full gap-5 py-48 lg:gap-3 px-7 sm:px-14 xl:px-32 xl:gap-7">
      <h1 className="text-2xl font-bold lg:text-3xl xl:text-5xl">Projects</h1>
      <p className="text-xl xl:text-2xl text-dark-gray-800">
        Things I’ve built so far
      </p>

      <div className="flex flex-col flex-wrap items-center justify-center w-full gap-10 lg:flex-row py-7">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </main>
  );
}

export default page;
