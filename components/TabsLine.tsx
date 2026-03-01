"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useMemo } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

type Tab = {
  href: string;
  label: string;
};

interface TabsLineProps {
  tabs: Tab[];
  className?: string;
}

export default function TabsLine({ tabs, className }: TabsLineProps) {
  const sectionIds = useMemo(() => {
    return tabs.map((tab) => tab.href.replace("#", ""));
  }, [tabs]);

  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className={`fixed top-4 left-4 z-50 ${className || ""}`}>
      <Tabs value={`#${activeSection}`}>
        <TabsList className="backdrop-blur-md" variant="line"> 
          {tabs.map((tab: Tab) => {
            return (
              <TabsTrigger
                key={tab.href}
                value={tab.href}
                asChild
              >
                <Link href={tab.href}>
                  {tab.label}
                </Link>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
}