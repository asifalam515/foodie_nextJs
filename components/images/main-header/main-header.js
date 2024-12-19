"use client";
import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const path = usePathname();

  return (
    <div>
      <Link href="/">
        <h1 className="text-3xl">Home</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodie Community</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
