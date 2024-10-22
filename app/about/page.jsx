"use client";
import React, { useEffect } from 'react';
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import 'animate.css';
import 'aos/dist/aos.css';
import AOS from "aos";
import BreadCrumb from "@/components/About/BreadCrumb";
import AboutHeroSection from "@/components/About/AboutHeroSection";
import OurMission from "@/components/About/OurMission";
import OurVision from "@/components/About/OurVision";
import Values from "@/components/About/Values";
import Projects from "@/components/About/Projects";
import ConnectClients from "@/components/About/ConnectClients";
import FactsFigurers from "@/components/About/FactsFigurers";

function About() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
	return (
		<>
			<Header_01 />
			<main className="main-wrapper relative overflow-hidden">

                  <BreadCrumb/>

                  <AboutHeroSection/>

				   <OurMission/>

				    <OurVision/>

				    <Values/>

                     <Projects/>

                  <ConnectClients/>

				  <FactsFigurers/>


			</main >
			<Footer_01 />
		</>
	);
}

export default About;
