import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/home/Hero";
import CoursesSection from "../components/home/CoursesSection";
import ExperienceSection from "../components/home/ExperienceSection";
import CTASection from "../components/home/CTASection";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <CoursesSection />
      <ExperienceSection />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
