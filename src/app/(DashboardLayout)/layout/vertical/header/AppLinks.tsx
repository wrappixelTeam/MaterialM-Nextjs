"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import * as AppsData from "./Data";
import Link from "next/link";
import Quicklinks from "./Quicklinks";
import { IconHelp } from "@tabler/icons-react";

const AppLinks = () => {
  return (
    <div className="relative group/menu">
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        className="h-10 w-10 hover:text-primary text-darklink hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary"
        type="button"
      >
        <Icon icon="solar:widget-3-line-duotone" height={20} />
      </button>

      <div
        id="dropdownHover"
        className="z-10 hidden bg-white dark:bg-dark dropdown megamenu w-[900px] left-0"
      >
        <div className="grid grid-cols-12 w-full">
          <div className="lg:col-span-8 col-span-12 flex items-stretch lg:px-5 lg:pr-0 px-0 py-5">
            <div className="grid grid-cols-12 lg:gap-3 w-full">
              {AppsData.appsLink.map((links, index) => (
                <div className="col-span-12 lg:col-span-6 flex items-stretch" key={index}>
                  <ul>
                    <li>
                      <Link
                        href={links.href}
                        className="flex gap-3 items-center hover:text-primary group relative"
                      >
                        <span className="bg-lighthover dark:bg-darkgray  h-10 w-10 flex justify-center items-center rounded-full">
                          <Image
                            src={links.avatar}
                            width={20}
                            height={20}
                            alt="materialm"
                          />
                        </span>
                        <div>
                          <h6 className="font-semibold text-sm text-dark dark:text-white group-hover:text-primary mb-1 ">
                            {links.title}
                          </h6>
                          <p className="text-xs text-link dark:text-darklink opacity-90 font-medium">
                            {links.subtext}
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
              <div className="col-span-12 md:col-span-12 border-t border-border dark:border-darkborder hidden lg:flex items-stretch pt-4 pr-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center text-dark dark:text-darklink">
                    <i className="ti ti-help text-lg "></i>
                    <Link
                      href={"/"}
                      className="text-sm font-semibold hover:text-primary ml-2 flex gap-2 items-center"
                    >
                      <IconHelp width={20} />
                      Frequently Asked Questions
                    </Link>
                  </div>
                  <Link
                    href={"/"}
                    className="btn py-2 px-4 "
                  >
                    Check
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 col-span-12  flex items-strech">
            <Quicklinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLinks;
