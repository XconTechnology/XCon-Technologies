'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header_01 from '@/components/header/Header_01';
import Footer_01 from '@/components/footer/Footer_01';
import Service from "@/components/Home/Service";
import HeroSection from "@/components/Home/HeroSection";
import Technologies from "@/components/Home/Technologies";
import Core from "@/components/Home/Core";
import JoinUs from "@/components/Home/JoinUs";
import WhyUs from "@/components/Home/WhyUs";
import OurSuccess from "@/components/Home/OurSuccess";
import Expertise from "@/components/Home/Expertise";
import EngagmentModels from "@/components/Home/EngagmentModels";
import ServicesData from "@/components/Home/ServicesData";



const Splash = dynamic(() => import('@/components/splash/Splash'), { ssr: false });

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
      <div className='page-wrapper relative z-[1] bg-white'>
        <Header_01 />
        <main className='main-wrapper relative overflow-hidden'>
          <HeroSection />
          <Service />
          <Expertise/>
          <Technologies />
          <WhyUs />
          <EngagmentModels/>
          <Core />
          <ServicesData/>
          <OurSuccess />
          <JoinUs />
        </main>
        <Footer_01 />
      </div>
  );
}

export default Home;
