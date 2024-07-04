"use client";
import "flowbite";
import React, { useState, useEffect } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Search from "./Search";
import { Icon } from "@iconify/react";
import AppLinks from "./AppLinks";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Profile from "./Profile";
import { Cart } from "./Cart";
import { Language } from "./Language";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`sticky top-0 z-[5] ${
        isSticky ? "bg-lightgray dark:bg-dark shadow-md " : "bg-transparent"
      }`}
    >
      <Navbar
        fluid
        className="rounded-none bg-transparent dark:bg-transparent py-4 sm:px-6"
      >
        {/* Toggle Icon   */}
        <Navbar.Collapse className="xl:block hidden">
          <div className="flex gap-3 items-center relative">
            {/* Toggle Menu    */}

            <span className="h-10 w-10 hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer">
              <Icon icon="solar:hamburger-menu-line-duotone" height={24} />
            </span>

            {/* App Link Dropwown   */}
            <AppLinks />

            <Search />
          </div>
        </Navbar.Collapse>

        <Navbar.Collapse className="xl:block hidden">
          <div className="flex gap-3 items-center">
            {/* Search   */}

            {/* Theme Toggle */}
            <DarkThemeToggle className="h-10 w-10 hover:text-primary hover:bg-lightprimary dark:hover:bg-lightprimary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-darklink" />

            {/* Language Dropdown*/}
            <Language />

            {/* Shop cart */}
            <Cart />

            {/* Messages Dropdown */}
            <Messages />

            {/* Notification Dropdown */}
            <Notifications />

            {/* Profile Dropdown */}
            <Profile />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
