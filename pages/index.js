import Hero from "./Hero";
import React from "react";
import ContactBox from "../components/ContactBox";
import Description from "../components/Description";
import Link from "next/link";
import TypingTerminal from "@/components/TypingTerminal";

export default function Home() {
  return (
    <>
      <div className="lg:flex gap-6 pb-10">
        <Hero />
        <ContactBox />
      </div>
      <Description />
    </>
  )
}
