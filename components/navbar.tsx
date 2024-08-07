'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const experiences: {title: string; href: string; description: string}[] = [
  {
    title: "Project MIDAS - Full-stack",
    href: "/experience/midas",
    description:
      "Full-stack web developer for a school psychology analytics research group."
  },
  {
    title: "SAEBRS Early Childhood - Web dev & research",
    href: "/experience/midas-app",
    description:
      "Web-based app developer for data collection and surveying student mental health."
  },
  {
    title: "Coding Coach",
    href: "/experience/coder-school",
    description:
      "Teaching kids and teens game design and coding."
  },
  {
    title: "Coder Fair - Front-end designer/developer",
    href: "/experience/coder-fair",
    description:
      "Social website for students to upload and browse projects from The Coder School."
  },
]

const projects: {title: string; href: string; description: string}[] = [
  {
    title: "Image Effects",
    href: "/projects/image-effects",
    description:
      "Perform unique operations on images with bitwise operations and pixel sorting."
  },
  {
    title: "CourierPath",
    href: "/projects/courier-path",
    description:
      "Website/app for food delivery workers to track and optimize their earnings."
  },
  {
    title: "Portfolio",
    href: "/projects/portfolio",
    description:
      "This website"
  },
  // {
  //   title: "PSX Racing",
  //   href: "/projects/psx-racing",
  //   description:
  //     "Work-in-progress PS1 style racing game made with Godot"
  // },
]



export default function Navbar() {
  return (
    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem >
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem >
          <NavigationMenuTrigger>Experience</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {experiences.map((experience) => (
                <ListItem
                  key={experience.title}
                  title={experience.title}
                  href={experience.href}
                >
                  {experience.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem >
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={project.href}
                >
                  {project.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* <NavigationMenuItem >
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Cool Stuff
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"