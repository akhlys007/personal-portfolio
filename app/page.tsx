"use client";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
return (
  <main className="relative bg-black-100 flex-justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="w-full">
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProjects />
      <Clients />
      <Experience/>
    </div>
  </main>
)
}
