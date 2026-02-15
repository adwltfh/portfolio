import { Button } from "@heroui/react";
import { ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";

type AccordionItem = {
  title: string;
  children: {
    title: string;
    content: ReactNode;
  }[];
};

type AccordionButtonProps = {
  label: string;
  icon?: ReactNode;
  children?: AccordionItem[];
  activeYear: string | null;
  setActiveYear: (year: string) => void;
};

export default function AccordionButton({
  label,
  icon,
  children,
  activeYear,
  setActiveYear,
}: AccordionButtonProps) {
  const [activeChild, setActiveChild] = useState<string | null>(null);

  const open = !!activeYear;   

  const toggle = () => {
    setActiveYear(open ? "" : label);
  };

  return (
    <div className="w-full text-left cursor-pointer">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          startContent={icon}
          variant="flat"
          disableRipple
          className="p-0 h-auto w-full text-left flex"
          onPress={toggle}
        >
          <span>{label}</span>
        </Button>
        <ChevronRight
          className={`h-5 w-5 transition-transform duration-300 ${
            open ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>

      {/* children */}
      <div
        className={`ml-6 overflow-hidden transition-all duration-300 space-y-2 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children?.map((year) => (
          <div key={year.title} className="mt-2">
            <Button
              disableRipple
              className={`text-gray-700 ${activeChild === year.title ? "bg-gray-200" : ""}`}
              onPress={() => {
                setActiveChild(year.title);
                setActiveYear(year.title);
              }}
            >
              {year.title}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
