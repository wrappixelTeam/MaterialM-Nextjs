"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import * as MessagesData from "./Data";
import React from "react";
import Image from "next/image";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { Badge, Button } from "flowbite-react";

const Messages = () => {
  return (
    <div className="relative group/menu">
      <div className="relative">
        <button
          id="dropdownMsgButton"
          data-dropdown-toggle="dropdownHover-Msg"
          data-dropdown-trigger="hover"
          className="h-10 w-10 hover:text-primary text-darklink hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary"
          type="button"
        >
          <Icon icon="solar:inbox-line-line-duotone" height={20} />
        </button>
        <span className="rounded-full absolute end-1 top-[4px] bg-primary text-[10px] h-4 w-4 flex justify-center items-center text-white">
          3
        </span>
      </div>
      <div
        id="dropdownHover-Msg"
        className="hidden bg-white dropdown w-full sm:w-[360px] py-6 z-[1] translate"
      >
        <div className="flex items-center  px-7 justify-between">
          <h3 className="mb-0 text-lg font-semibold text-dark dark:text-white">
            Inbox
          </h3>
          <Badge color={"warning"}>3 new</Badge>
        </div>
        <div>
          <SimpleBar className="max-h-80 mt-3">
            {MessagesData.MessagesLink.map((links, index) => (
              <Link
                href={"/"}
                className="py-3 flex justify-between items-center bg-hover px-6 group/link"
                key={index}
              >
                <div className="flex items-center">
                  <span className="flex-shrink-0 relative">
                    <Image
                      src={links.avatar}
                      width={45}
                      height={45}
                      alt="materialm"
                      className="rounded-full"
                    />
                    <i
                      className={`h-2 w-2 rounded-full absolute end-0 top-0 ${links.color}`}
                    ></i>
                  </span>
                  <div className="ps-4">
                    <h5 className="mb-1 text-sm  group-hover/link:text-primary">
                      {links.title}
                    </h5>
                    <span className="text-xs block  truncate text-darklink">
                      {links.subtitle}
                    </span>
                  </div>
                </div>
                <span className="text-xs block self-start pt-1.5">
                  {links.time}
                </span>
              </Link>
            ))}
          </SimpleBar>
          <div className="pt-5 px-6">
            <Button
              color={"primary"}
              className="w-full border border-primary text-primary hover:bg-primary hover:text-white"
              pill
              outline
            >
              See All Messages
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
