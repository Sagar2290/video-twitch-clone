"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { useIsClient } from "usehooks-ts";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  // useIsClient() is shorter way of checking by using useState() and useEffect() commented below.
  const isClient = useIsClient();
  // const [isClient, setIsClient] = useState(false);
  const { collapsed } = useSidebar((state) => state);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  if (!isClient) {
    return (
      <aside
        className={
          "fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50"
        }
      >
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
