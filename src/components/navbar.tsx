"use client";

import React, { useState } from "react";
import { Menu, Meh, Smile, FolderOpen, Folder, BookOpen, Album, Mail, MailOpen, User, Users } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, } from "./ui/dropdown-menu";

export const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <header className="w-full p-3 bg-gray-950 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="font-bold text-lg">Bruno Romero</a>
        <div className="hidden lg:block space-x-10">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#education-experience" className="hover:underline">Education & Experience</a>
          <a href="#references" className="hover:underline">References</a>
        </div>
        <a href="#contact" className="rounded bg-white text-black hidden lg:inline-block py-2 px-4 text-lg font-bold">Contact me</a>
        <div className="lg:hidden">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <Button variant="outline" size="icon" onClick={() => setOpen(true)}>
                <Menu/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start" onCloseAutoFocus={(e) => e.preventDefault()}>
              <DropdownMenuLabel>Navigate to</DropdownMenuLabel>
              <DropdownMenuGroup>

                <DropdownMenuItem onClick={() => handleScroll("about")} className="cursor-pointer group">
                  About
                  <DropdownMenuShortcut className="grid place-items-center">
                    <Meh className="col-start-1 row-start-1 transition-opacity duration-500 opacity-100 group-hover:opacity-0"/>
                    <Smile className="col-start-1 row-start-1 transition-opacity duration-500 opacity-0 group-hover:opacity-100"/>
                  </DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => handleScroll("projects")} className="cursor-pointer group">
                  Projects
                  <DropdownMenuShortcut className="grid place-items-center">
                    <Folder className="col-start-1 row-start-1 transition-opacity duration-500 opacity-100 group-hover:opacity-0"/>
                    <FolderOpen className="col-start-1 row-start-1 transition-opacity duration-500 opacity-0 group-hover:opacity-100"/>
                  </DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => handleScroll("education-experience")} className="cursor-pointer group">
                  Education & Experience
                  <DropdownMenuShortcut className="grid place-items-center">
                    <Album className="col-start-1 row-start-1 transition-opacity duration-500 opacity-100 group-hover:opacity-0"/>
                    <BookOpen className="col-start-1 row-start-1 transition-opacity duration-500 opacity-0 group-hover:opacity-100"/>
                  </DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => handleScroll("references")} className="cursor-pointer group">
                  References
                  <DropdownMenuShortcut className="grid place-items-center">
                    <User className="col-start-1 row-start-1 transition-opacity duration-500 opacity-100 group-hover:opacity-0"/>
                    <Users className="col-start-1 row-start-1 transition-opacity duration-500 opacity-0 group-hover:opacity-100"/>
                  </DropdownMenuShortcut>
                </DropdownMenuItem>

              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Interested in?</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => handleScroll("contact")} className="cursor-pointer group">
                Contact me!
                <DropdownMenuShortcut className="grid place-items-center">
                  <Mail className="col-start-1 row-start-1 transition-opacity duration-500 opacity-100 group-hover:opacity-0"/>
                  <MailOpen className="col-start-1 row-start-1 transition-opacity duration-500 opacity-0 group-hover:opacity-100"/>
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};