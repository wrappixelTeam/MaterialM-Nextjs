"use client";
import React from "react";

const Languages = [
  {
    flagname: "English (UK)",
    icon: "/images/flag/icon-flag-en.svg",
    value: "en",
  },
  {
    flagname: "中国人 (Chinese)",
    icon: "/images/flag/icon-flag-cn.svg",
    value: "ch",
  },
  {
    flagname: "français (French)",
    icon: "/images/flag/icon-flag-fr.svg",
    value: "fr",
  },

  {
    flagname: "عربي (Arabic)",
    icon: "/images/flag/icon-flag-sa.svg",
    value: "ar",
  },
];

export const Language = () => {
  return (
    <>
      <div className="relative group/menu">
        <button
          id="dropdownLanguage"
          data-dropdown-toggle="dropdownHover-languge"
          data-dropdown-trigger="hover"
          className="h-10 w-10 hover:text-primary text-darklink hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary"
          type="button"
        >
          <img
            src="/images/flag/icon-flag-en.svg"
            alt="logo"
            height="40"
            width="35"
            className="rounded-full h-6 w-6 object-cover"
            id="dropdownLanguage"
            data-dropdown-toggle="dropdownHover-languge"
            data-dropdown-trigger="hover"
          />
        </button>

        <div
          id="dropdownHover-languge"
          className="hidden bg-white dropdown min-w-56 w-full py-4 z-[1] translate py-2"
        >
            
          {Languages.map((item, index) => (
            <div className="flex gap-3 items-center py-3 cursor-pointer bg-hover px-6 text-dark dark:text-white hover:text-primary dark:hover:text-primary" key={index} >
              <img
                src={item.icon}
                alt="flag"
                className="rounded-full h-6 w-6 object-cover "
              />
              <span>{item.flagname}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
