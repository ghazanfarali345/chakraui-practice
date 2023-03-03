"use client";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import SelectCourse from "./components/SelectCourse";
import AvailabledCourse from "./components/AvailabledCourse";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Slider />
      <SelectCourse />
      <AvailabledCourse />
      <Testimonials />
    </main>
  );
}
