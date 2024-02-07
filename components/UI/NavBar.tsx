"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import Link from "next/link";

const NavBar = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    theme === "dark" && setTheme("light");
    theme === "light" && setTheme("dark");
  };

  return (
    <div className="p-10 px-6 sm:px-12 md:px-24 flex justify-between">
      <p className="text-primary text-2xl font-bold">
        <Link href="/">
          Notes<span className="font-light">App</span>
        </Link>
      </p>
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="mr-2 md:mr-5"
        >
          <Sun className="rotate-100 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Moon className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
        <Button
          variant="default"
          size="default"
          className="ml-2 md:ml-5 hover:scale-105"
          asChild
        >
          <Link href="/add-note">Add Note</Link>
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
