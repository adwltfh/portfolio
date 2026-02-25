"use client";

import { ReactNode, useEffect, useState } from "react";

import { BriefcaseBusiness, FolderGit2, UserStar } from "lucide-react";

import { useModal } from "../contexts/ModalContext";

import AboutMe from "../components/modalPages/AboutMe";
import Experiences from "../components/modalPages/Experiences";
import AccordionButton from "../components/AccordionButton";
import { Button } from "@heroui/react";
import ProjectPreview from "../components/ProjectPreview";

export default function Home() {
  // kalo mau panggil modal selalu pake ini pokoknyaa
  // const { openModal } = useModal();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [currentTitle, setCurrentTitle] = useState("About Me");
  const [currentContent, setCurrentContent] = useState<ReactNode>(<AboutMe />);
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const openContent = (title: string, content: ReactNode) => {
    setCurrentTitle(title);
    setCurrentContent(content);
  };

  const openMenu = (title: string, content: ReactNode) => {
    setActiveYear(null);
    setCurrentTitle(title);
    setCurrentContent(content);
  };

  const projectItems = [
    {
      title: "2021",
      children: [
        { title: "Landing Page", content: null },
        { title: "Dashboard", content: null },
      ],
    },
    {
      title: "2022",
      children: [{ title: "E-Commerce", content: null }],
    },
    {
      title: "2023",
      children: [{ title: "Cyber Security", content: null }],
    },
  ];

  useEffect(() => {
    setActiveProject(null);
  }, [activeYear]);

  // const openSiteInModal = (url: string, title: string) => {
  //   openModal(title, <IframeWithFallback url={url} title={title} />);
  // };

  return (
    <div className="min-h-screen py-12 px-8 flex items-center justify-center">
      <div className="h-fit w-full max-w-8xl bg-gray-50/30 border border-gray-400 rounded-2xl">
        {/* button container */}
        <div className="border-b border-gray-400">
          <div className="p-4 bg-gray-100 rounded-tl-2xl rounded-tr-2xl">
            test
          </div>
        </div>

        <div className="flex">
          {/* left section */}
          <div className="w-1/5 p-4 flex flex-col gap-2">
            <Button
              startContent={<UserStar />}
              disableRipple
              className="p-0 flex w-full justify-start cursor-pointer"
              onPress={() => openMenu("About Me", <AboutMe />)}
            >
              About Me
            </Button>
            {/* <Button
              startContent={<BriefcaseBusiness />}
              disableRipple
              className="p-0 flex w-full justify-start cursor-pointer"
              onPress={() => openMenu("Experiences", <Experiences />)}
            >
              Experiences
            </Button> */}
            <AccordionButton
              label="Projects"
              icon={<FolderGit2 />}
              children={projectItems}
              activeYear={activeYear}
              setActiveYear={setActiveYear}
            />
            <button
              className="flex w-full justify-start cursor-pointer"
              onClick={() => openMenu("Playgorund", null)}
            >
              Playground
            </button>
            <button
              className="flex w-full justify-start cursor-pointer"
              onClick={() => openMenu("Socials", null)}
            >
              Socials
            </button>
          </div>
          <div className="self-stretch w-[0.5px] bg-gray-400"></div>

          {/* middle section, only shows when the accordion button is active */}
          {!!activeYear && (
            <>
              <ProjectPreview
                projectItems={projectItems}
                activeYear={activeYear}
                activeProject={activeProject}
                setActiveProject={setActiveProject}
                openContent={openContent}
              />

              <div className="self-stretch w-[0.5px] bg-gray-400"></div>
            </>
          )}

          {/* right section */}
          <div className="w-full p-4">
            <h2 className="text-2xl font-bold text-heading mb-4">
              {currentTitle}
            </h2>
            <div className="text-gray-700">{currentContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
