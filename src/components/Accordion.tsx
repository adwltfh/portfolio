import { Button } from "@heroui/react";
import { ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";

type AccordionProps = {
  label: string;
  icon?: ReactNode;
  content;
};

export default function Accordion({ label, icon, content }: AccordionProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full text-left cursor-pointer">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          startContent={icon}
          variant="flat"
          disableRipple
          className={`px-0 py-2 h-auto flex w-full justify-start ${open ? "" : ""}`}
          onPress={toggle}
        >
          <span className="font-medium">{label}</span>
        </Button>
        <ChevronRight
          className={`h-5 w-5 transition-transform duration-300 text-black ${
            open ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>

      {/* children */}
      <div
        className={`mx-4 overflow-hidden transition-all duration-300 space-y-2 text-justify ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
