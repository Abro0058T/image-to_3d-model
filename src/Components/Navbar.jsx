"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu"; // Make sure these components exist and are properly exported
import { cn } from "../utils/utils"; // Ensure this utility function exists and works properly

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="" />{" "}
      {/* Ensure the top-2 class and other classes work as intended */}
    </div>
  );
}

export function Navbar({ className }) {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn("fixed top-7 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {" "}
        {/* Ensure Menu component handles setActive correctly */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="section 1"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="section 2"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="section 3"
        ></MenuItem>
      </Menu>
    </div>
  );
}
