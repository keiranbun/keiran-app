import SkillsBadge from "./SkillsBadge";

const SkillsTab = () => {
  return (
    <div className="mb-5 ml-2">
      <h1 className="underline text-lg mb-2">Languages</h1>
      <div className="flex gap-2">
        <SkillsBadge
          hover="Typescript"
          img="https://skillicons.dev/icons?i=typescript"
        />
        <SkillsBadge
          hover="Javascript"
          img="https://skillicons.dev/icons?i=javascript"
        />
        <SkillsBadge hover="HTML" img="https://skillicons.dev/icons?i=html" />
        <SkillsBadge hover="CSS" img="https://skillicons.dev/icons?i=css" />
        <SkillsBadge hover="C#" img="https://skillicons.dev/icons?i=cs" />
        <SkillsBadge hover="Golang" img="https://skillicons.dev/icons?i=go" />
      </div>
      <h1 className="underline text-lg mb-2">Frameworks</h1>
      <div className="flex gap-2">
        <SkillsBadge hover="React" img="https://skillicons.dev/icons?i=react" />
        <SkillsBadge
          hover="Tailwind CSS"
          img="https://skillicons.dev/icons?i=tailwind"
        />
        <SkillsBadge
          hover="Node.js"
          img="https://skillicons.dev/icons?i=nodejs"
        />

        <SkillsBadge hover=".NET" img="https://skillicons.dev/icons?i=net" />
      </div>
      <h1 className="underline text-lg mb-2">Dev Ops</h1>
      <div className="flex gap-2 flex-wrap">
        <SkillsBadge hover="Azure" img="https://skillicons.dev/icons?i=azure" />
        <SkillsBadge hover="AWS" img="https://skillicons.dev/icons?i=aws" />
        <SkillsBadge
          hover="Docker"
          img="https://skillicons.dev/icons?i=docker"
        />
        <SkillsBadge
          hover="GitHub"
          img="https://skillicons.dev/icons?i=github"
        />
        <SkillsBadge hover="Git" img="https://skillicons.dev/icons?i=git" />
        <SkillsBadge
          hover="Github Actions"
          img="https://skillicons.dev/icons?i=githubactions"
        />
        <SkillsBadge
          hover="Kubernetes"
          img="https://skillicons.dev/icons?i=kubernetes"
        />
        <SkillsBadge hover="Redis" img="https://skillicons.dev/icons?i=redis" />
      </div>
      <h1 className="underline text-lg mb-2">Other</h1>
      <div className="flex gap-2 flex-wrap">
        <SkillsBadge
          hover="Arch Linux"
          img="https://skillicons.dev/icons?i=arch"
        />
        <SkillsBadge hover="Linux" img="https://skillicons.dev/icons?i=linux" />
        <SkillsBadge hover="Apple" img="https://skillicons.dev/icons?i=apple" />
        <SkillsBadge
          hover="VS Code"
          img="https://skillicons.dev/icons?i=vscode"
        />
        <SkillsBadge
          hover="Neovim"
          img="https://skillicons.dev/icons?i=neovim"
        />
        <SkillsBadge hover="Markdown" img="https://skillicons.dev/icons?i=md" />
        <SkillsBadge
          hover="Vercel"
          img="https://skillicons.dev/icons?i=vercel"
        />
        <SkillsBadge hover="npm" img="https://skillicons.dev/icons?i=npm" />
        <SkillsBadge hover="pnpm" img="https://skillicons.dev/icons?i=pnpm" />
        <SkillsBadge
          hover="postman"
          img="https://skillicons.dev/icons?i=postman"
        />
      </div>
    </div>
  );
};

export default SkillsTab;

/**
        <SkillsBadge
          label=""
          img=""
        />

![Claude Badge](https://img.shields.io/badge/Claude-D97757?logo=claude&logoColor=fff&style=for-the-badge)
![GitHub Actions Badge](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=fff&style=for-the-badge)

        <SkillsBadge
          hover="Tailwind CSS"
          img="https://skillicons.dev/icons?i=tailwind"
        />



        <SkillsBadge
          label="dev-ops"
          img="https://skillicons.dev/icons?i=typescript,cs,css,html,tailwind"
        />
         */
