"use client";
import React from "react";
import { Button, Drawer, Tooltip } from "flowbite-react";
import { Icon } from "@iconify/react";
import { useSidebarContext } from "../../../../context/SidbarContext";
import { useState } from "react";
import { IconCheck, IconSettings } from "@tabler/icons-react";
import SimpleBar from "simplebar-react";

export const Customizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  interface SliderProps {
    value: number;
    min: number;
    max: number;
    valueLabelDisplay: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

  const Slider: React.FC<SliderProps> = ({
    value,
    min,
    max,
    valueLabelDisplay,
    onChange,
  }) => (
    <input
      type="range"
      value={value}
      min={10}
      max={max}
      onChange={onChange}
      className="slider w-full"
    />
  );

  const {
    activeDir,
    setActiveDir,
    activeMode,
    setActiveMode,
    isCollapse,
    setIsCollapse,
    activeTheme,
    setActiveTheme,
    activeLayout,
    setActiveLayout,
    isLayout,
    isCardShadow,
    setIsCardShadow,
    setIsLayout,
    isBorderRadius,
    setIsBorderRadius,
  } = useSidebarContext();

  const themeColors = [
    {
      id: 1,
      bgColor: "#635BFF",
      disp: "BLUE_THEME",
    },
    {
      id: 2,
      bgColor: "#0074BA",
      disp: "AQUA_THEME",
    },
    {
      id: 3,
      bgColor: "#763EBD",
      disp: "PURPLE_THEME",
    },
    {
      id: 4,
      bgColor: "#0A7EA4",
      disp: "GREEN_THEME",
    },
    {
      id: 5,
      bgColor: "#01C0C8",
      disp: "CYAN_THEME",
    },
    {
      id: 6,
      bgColor: "#FA896B",
      disp: "ORANGE_THEME",
    },
  ];

  return (
    <div>
      <div>
        <Button
          color={"primary"}
          className="h-14 w-14 flex justify-center items-center fixed bottom-6 end-6  rounded-full hover:bg-primaryemphasis"
          onClick={() => setIsOpen(true)}
        >
          <IconSettings />
        </Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        className="dark:bg-darkgray max-w-[350px] w-full"
      >
        <div className="border-ld  border-b">
          <div className="flex justify-between items-center p-4">
            <h5 className="text-xl">Settings</h5>
          </div>
        </div>
        <SimpleBar className="h-n80">
          <div className="p-4">
            {/* Theme Option */}
            <h4 className="text-base mb-2">Theme Option</h4>
            <div className="flex gap-4 mb-7">
              <Button
                color={"primary"}
                className={`border bg-transparent text-darklink btn-shadow border-ld  dark:text-white btn hover:bg-primary hover:text-white rounded-md py-3 px-3 dark:hover:text-white 
                ${
                  activeMode === "light" ? "active text-white bg-primary " : ""
                }`}
                onClick={() => setActiveMode("light")}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:sun-bold-duotone"
                    width="20"
                    className="me-2"
                  />
                  Light
                </span>
              </Button>
              <Button
                color={"primary"}
                className={`border bg-transparent dark:text-white border-ld text-darklink hover:bg-primary hover:text-white rounded-md py-3 px-3 ${
                  activeMode === "dark" ? "active text-white bg-primary " : ""
                }`}
                onClick={() => setActiveMode("dark")}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:moon-bold-duotone"
                    width="20"
                    className="me-2"
                  />{" "}
                  Dark
                </span>
              </Button>
            </div>

            {/* Theme direction */}
            <h4 className="text-base mb-2">Theme Direction</h4>
            <div className="flex gap-4 mb-7">
              <Button
                color={"primary"}
                className={`border bg-transparent text-darklink dark:text-white border-ld  hover:bg-primary hover:text-white rounded-md py-3 px-3  dark:hover:text-white ${
                  activeDir === "ltr" ? "text-white bg-primary" : ""
                }`}
                onClick={() => setActiveDir("ltr")}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:align-left-line-duotone"
                    width="20"
                    className="me-2"
                  />{" "}
                  LTR
                </span>
              </Button>
              <Button
                color={"primary"}
                className={`border bg-transparent btn-shadow border-ld text-darklink dark:text-white btn hover:bg-primary hover:text-white rounded-md py-3 px-3 ${
                  activeDir === "rtl" ? "text-white bg-primary" : ""
                }`}
                onClick={() => setActiveDir("rtl")}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:align-right-line-duotone"
                    width="20"
                    className="me-2"
                  />{" "}
                  RTL
                </span>
              </Button>
            </div>

            {/* Theme Colors */}
            <h4 className="text-base mb-2">Theme Colors</h4>
            <div className="flex flex-row flex-wrap  gap-4 mb-7">
              {themeColors.map((theme, index) => (
                <span
                  key={index}
                  className="border bg-transparent text-link dark:text-white border-ld py-5 px-6 rounded-md cursor-pointer "
                >
                  <Tooltip
                    content={theme.disp}
                    placement="top"
                    animation="duration-500"
                  >
                    <label
                      className=" h-6 w-6 rounded-full block cursor-pointer flex items-center justify-center"
                      style={{ backgroundColor: theme.bgColor }}
                      onClick={() => setActiveTheme(theme.disp)}
                    >
                      {activeTheme === theme.disp && (
                        <IconCheck className="text-white" size={18} />
                      )}
                    </label>
                  </Tooltip>
                </span>
              ))}
            </div>

            {/* Theme layout */}
            <h4 className="text-base mb-2">Layout Type</h4>
            <div className="flex flex-wrap  gap-4 mb-7">
              <Button
                color={"primary"}
                className={`border bg-transparent btn-shadow border-ld text-darklink dark:text-white btn hover:bg-primary hover:text-white rounded-md py-3 px-2  dark:hover:text-white ${
                  activeLayout === "vertical" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setActiveLayout("vertical")}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:slider-vertical-line-duotone"
                    width="20"
                    className="me-2"
                  />
                  Vertical
                </span>
              </Button>
              <Button
                color={"primary"}
                onClick={() => setActiveLayout("horizontal")}
                className={`border bg-transparent text-link dark:text-white border-ld text-darklink hover:bg-primary hover:text-white rounded-md py-3 px-2 ${
                  activeLayout === "horizontal" ? "bg-primary text-white" : ""
                }`}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:slider-horizontal-line-duotone"
                    width="20"
                    className="me-2"
                  />
                  Horizontal
                </span>
              </Button>
            </div>

            {/* Sidebar Type */}
            <h4 className="text-base mb-2">Container Option</h4>
            <div className="flex flex-wrap  gap-4 mb-7">
              <Button
                color={"primary"}
                className={`border bg-transparent btn-shadow border-ld text-darklink dark:text-white btn hover:bg-primary hover:text-white rounded-md py-3 px-2   dark:hover:text-white ${
                  isLayout === "boxed" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setIsLayout("boxed")}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:quit-full-screen-square-line-duotone"
                    width="20"
                    className="me-2"
                  />
                  Boxed
                </span>
              </Button>
              <Button
                color={"primary"}
                className={`border bg-transparent text-link dark:text-white border-ld text-darklink hover:bg-primary hover:text-white rounded-md py-3 px-2 ${
                  isLayout === "full" ? "bg-primary text-white" : ""
                }`}
                onClick={() => setIsLayout("full")}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:full-screen-square-line-duotone"
                    width="20"
                    className="me-2"
                  />
                  Full
                </span>
              </Button>
            </div>

            {/* Sidebar Type */}
            <h4 className="text-base mb-2">Sidebar Type</h4>
            <div className="flex flex-wrap  gap-4 mb-7">
              <Button
                color={"primary"}
                className={`border bg-transparent btn-shadow border-ld text-darklink dark:text-white btn hover:bg-primary hover:text-white rounded-md py-3 px-2   dark:hover:text-white ${
                  !isCollapse ? "bg-primary text-white" : ""
                }`}
                onClick={() => setIsCollapse(false)}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:mirror-left-line-duotone"
                    width="20"
                    className="me-2"
                  />
                  Full
                </span>
              </Button>
              <Button
                color={"primary"}
                className={`border bg-transparent text-link dark:text-white border-ld text-darklink hover:bg-primary hover:text-white rounded-md py-3 px-2 ${
                  isCollapse ? "bg-primary text-white" : ""
                }`}
                onClick={() => setIsCollapse(true)}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:mirror-right-line-duotone"
                    width="20"
                    className="me-2"
                  />
                  Collapse
                </span>
              </Button>
            </div>

            {/* Card  With */}
            <h4 className="text-base mb-2">Card With</h4>
            <div className="flex flex-wrap  gap-4 mb-7">
              <Button
                color={"primary"}
                className={`border bg-transparent btn-shadow border-ld text-darklink dark:text-white btn hover:bg-primary hover:text-white rounded-md py-3 px-2  ${
                  !isCardShadow ? "bg-primary text-white" : ""
                }`}
                onClick={() => setIsCardShadow(false)}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:three-squares-line-duotone"
                    width="20"
                    className="me-2"
                  />
                  Border
                </span>
              </Button>
              <Button
                color={"primary"}
                className={`border bg-transparent text-link dark:text-white border-ld text-darklink hover:bg-primary hover:text-white rounded-md py-3 px-2 dark:hover:text-white ${
                  isCardShadow ? "bg-primary text-white" : ""
                }`}
                onClick={() => setIsCardShadow(true)}
              >
                <span className="flex items-center">
                  <Icon
                    icon="solar:three-squares-bold-duotone"
                    width="20"
                    className="me-2"
                  />
                  Shadow
                </span>
              </Button>
            </div>

            {/* Card  With */}
            <h4 className="text-base mb-2">Theme Border Radius</h4>
            <Slider
              value={isBorderRadius}
              min={4}
              max={24}
              onChange={(event: any) => setIsBorderRadius(event.target.value)}
              valueLabelDisplay={""}
            />
            <div>Current Value: {isBorderRadius}</div>
          </div>
        </SimpleBar>
      </Drawer>
    </div>
  );
};
