"use-client";
import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import Miniicons from "./MiniSidebar";
import SimpleBar from "simplebar-react";
import SideProfile from "../sidebar/SideProfile/SideProfile";
import { Tooltip } from "flowbite-react";
import { useSidebarContext } from '../../../../context/SidbarContext'
import Logo from "../../shared/logo/Logo";

export const IconSidebar = () => {
  const { selectedIconId, setSelectedIconId } = useSidebarContext() || {};

  const handleClick = (id: number) => {
    if (setSelectedIconId) {
      setSelectedIconId(id);
    }
  };

  return (
    <div className="minisidebar-icon border-e border-ld bg-white dark:bg-darkgray fixed start-0 z-[1]">
      <div className="px-4 py-6 pt-7 logo">
        <Logo />
      </div>
      <SimpleBar className="miniicons">
        {Miniicons.map((links, index) => (
          // <Tooltip content={links.tooltip} className="w-auto z-10" placement="top" key={index} animation="duration-150">
            <button key={index}
              className={`h-12 w-12 hover:text-primary text-darklink hover:bg-lightprimary rounded-full flex justify-center items-center mx-auto mb-2 ${links.id == selectedIconId ? 'text-primary bg-lightprimary' : 'text-darklink bg-transparent'} `}
              type="button"
              onClick={() => handleClick(links.id)}
            >
              <Icon icon={links.icon} height={24} />
            </button>
          // </Tooltip>
        ))}
      </SimpleBar>
      <SideProfile />
    </div>
  );
};
