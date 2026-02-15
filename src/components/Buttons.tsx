import { Button } from "@heroui/react";
import { ReactNode } from "react";

type ButtonProps = {
  icon?: string;
  openContent: (title: string, content: ReactNode) => void;
  projectItems;
  activeYear;
};

export default function Buttons({
  icon,
  openContent,
  projectItems,
  activeYear,
}: ButtonProps) {
  const activeData = projectItems.find((item) => item.title === activeYear);

  return (
    <div className="w-1/5 p-4 flex flex-col gap-2">
      {activeData?.children?.map((project, index) => (
        <Button
          key={index}
          disableRipple
          className="p-0 flex w-full text-left cursor-pointer"
          onPress={() => openContent(project.title, project.content)}
        >
          {project.title}
        </Button>
      ))}
    </div>
  );
}
