"use client";
import Footer_01 from "@/components/footer/Footer_01";
import BusinessProspect from "@/components/OurServices/BusinessProspect";
import Header from "@/components/OurServices/Header";
import MultiChannel from "@/components/OurServices/MultiChannel";
import OurAchievements from "@/components/OurServices/OurAchievements";
import Solutions from "@/components/OurServices/Solutions";
import TechStack from "@/components/OurServices/TechStack";
import Projects from "@/components/OurServices/Projects";
import Workflow from "@/components/OurServices/Workflow";
import { useState } from "react";
import Diversity from "@/components/OurServices/Diversity";
import Growth from "@/components/OurServices/Growth";
import Expertise from "@/components/OurServices/Expertise";
import ContactForm from "@/components/Contact/ContactForm";
import ContactDetails from "@/components/Contact/ContactDetails";
import FaqS from "@/components/faq's/Faq";

function Page() {
    const [toggler, setToggler] = useState(false);

    return (
        <>
            <main className="main-wrapper relative overflow-hidden">
                <Header serviceType="uiUxDesign" />
                <MultiChannel serviceType="uiUxDesign"  />
                <BusinessProspect serviceType="uiUxDesign"  />
                <Solutions  serviceType="uiUxDesign" />
                <Diversity   serviceType="uiUxDesign"/>
                <Growth  serviceType="uiUxDesign" />
                <FaqS serviceType="uiUxDesign" />


                <section className="contact-section mt-24">
                    <div className="pb-20 xl:pb-[150px]">
                        <div className="global-container">
                            <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-2 items-center">
                                {/* Contact Left Block */}
                                <ContactDetails />

                                {/* Contact Form */}
                                <div className="order-2 flex justify-center items-center">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer_01 />
        </>
    );
}

export default Page;