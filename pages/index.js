import Hero from "../sections/Hero";
import React from "react";
import ContactBox from "../components/ContactBox";
import Description from "../components/Description";

export default function Home() {
  return (
    <>
      <div className="flex gap-6 pb-10">
        <Hero />
        <ContactBox />
      </div>
      <Description />
    </>
  )
}
