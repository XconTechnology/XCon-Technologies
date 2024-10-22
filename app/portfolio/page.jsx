"use client";
import React from 'react';
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import PortfolioBreadCrumb from "@/components/Portfolio/PortfolioBreadCrumb";
import Menus from "@/components/Portfolio/Menus";

function Portfolio() {
	return (
		<>
			<Header_01 />
			<main className="main-wrapper relative overflow-hidden">
             <PortfolioBreadCrumb/>
             <Menus/>
			</main>
			<Footer_01 />
		</>
	);
}

export default Portfolio;
