import ProjectCard from "@/components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center px-4">
      <div className="flex flex-wrap items-start justify-center gap-5">
        <ProjectCard
          title="Georgia Tattoos"
          description="A website for the Brisbane based tattoo artist Georgia Macdonald"
          gitLink="https://github.com/keiranbun/georgia-tattoos"
          websiteLink="https://www.georgiatattoos.com.au/"
          techStack={[
            "React",
            "TypeScript",
            "Tailwind",
            "Vercel",
            "Playwright",
          ]}
        />
        <ProjectCard
          title="keiran.app"
          description="A personal portfolio and project hub"
          gitLink="https://github.com/keiranbun/film-dex"
          websiteLink="https://keiran.app/"
          techStack={["React", "TypeScript", "Shadcn", "Tailwind", "Vercel"]}
        />
        <ProjectCard
          title="Film Dex"
          description="Top 100 movies with Australian streaming availability. Built as a sandbox for testing agentic AI development workflows"
          gitLink="https://github.com/keiranbun/film-dex"
          websiteLink="https://film-dex-rho.vercel.app/"
          techStack={[
            "React",
            "TypeScript",
            "Shadcn",
            "Tailwind",
            "OpenCode",
            "Vercel",
            "Claude Opus/Sonnet",
          ]}
        />
        <ProjectCard
          title="Advent of Code"
          description="Advent of Code is an annual set of Christmas-themed computer programming challenges"
          gitLink="https://github.com/keiranbun/advent-of-code"
          techStack={["??? (2026)", "go (2025)"]}
        />
      </div>
    </div>
  );
};

export default Projects;
