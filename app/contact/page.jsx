"use client";
import React from "react";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactDetails from "@/components/Contact/ContactDetails";
import ContactForm from "@/components/Contact/ContactForm";


function Contact() {
  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">
        {/*...::: Breadcrumb Section Start :::... */}
        <section
          id="section-breadcrumb"
          className="relative mb-10"
          style={{
            backgroundImage:
              "url('/assets/img_placeholder/th-1/contact-header-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
          }}
        >
          <div className="relative z-[1] flex items-center justify-center w-full h-full">
            <div className="global-container text-white text-center">
              <div className="breadcrumb-block">
                <h1 className="breadcrumb-title text-4xl md:text-6xl font-bold">
                  Contact Us
                </h1>
                <p className="breadcrumb-nav text-2xl mt-2">
                  Get in Touch with XCon
                </p>
                <ul className="breadcrumb-nav flex justify-center">
                  <Link href="/" style={{ color: "white" }}>
                    Home
                  </Link>
                  <span className="">
                    <Image
                      src="/assets/img_placeholder/th-1/try.svg"
                      alt="Background"
                      height={10}
                      width={10}
                    />
                  </span>
                  <div className="text-customGreen">Contact</div>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-24" />
        </section>
        {/*...::: Breadcrumb Section End :::... */}

        {/*...::: Contact Section Start :::... */}
        <section className="contact-section mt-24">
          <div className="pb-20 xl:pb-[150px]">
            <div className="global-container">
              <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 xl:grid-cols-2 items-center">
                {/* Contact Left Block */}
                <ContactDetails /> {/* Use the new ContactDetails component */}

                {/* Contact Form */}
                <div className="order-2 flex justify-center items-center">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*...::: Contact Section End :::... */}
      </main>
      <Footer_01 />
    </>
  );
}

export default Contact;
