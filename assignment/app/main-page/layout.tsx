"use client";
import React from "react";
import SideBar from "./_components/SideBar";
import TopBar from "./_components/TopBar";

export default function MainPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex gap-1">
        <div className="!w-[240px] !min-w-[240px]">
          <SideBar />
        </div>
        <div className="bg-white w-[1030px] ">
          <TopBar />
          <div className="">{children}</div>
        </div>
      </div>
      
    </div>
  );
}
