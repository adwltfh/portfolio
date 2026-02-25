import { Image } from "@heroui/image";
import { ReactNode, useState } from "react";

type ButtonProps = {
  icon?: string;
  openContent: (title: string, content: ReactNode) => void;
  projectItems: any;
  activeYear: string;
  activeProject: string | null;
  setActiveProject: (val: string | null) => void;
};

export default function ProjectPreview({
  icon,
  openContent,
  projectItems,
  activeYear,
  activeProject,
  setActiveProject,
}: ButtonProps) {
  const activeData = projectItems.find((item) => item.title === activeYear);

  return (
    <div className="w-1/5 p-4 flex flex-col">
      {activeData?.children?.map((project, index) => (
        <div
          key={project.title}
          onClick={() => {
            setActiveProject(project.title);
            openContent(project.title, project.content);
          }}
        >
          <div className={activeProject === project.title ? "bg-gray-200" : "bg-none"}>
            <div className="flex">
              <Image
                alt="HeroUI hero Image"
                src="https://heroui.com/images/hero-card-complete.jpeg"
                className="border border-gray-300"
                width={50}
                height={50}
              />
              <h1>{project.title}</h1>
            </div>
            <p className="pb-2">ini preview textnya</p>
          </div>
          <div className="py-2">
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}
