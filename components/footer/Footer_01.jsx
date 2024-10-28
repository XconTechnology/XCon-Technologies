"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import XConLogo from "../../public/assets/img_placeholder/Dark Logo.png";
import Marquee from "react-fast-marquee";
import "swiper/swiper-bundle.css";
import AWSCertificates from "../AWSCertificates/AWSCertificates";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer_01 = () => {
  useEffect(() => {
    const footer = document.querySelector(".mouse-cursor-gradient-tracking");

    const handleMouseMove = (e) => {
      const rect = footer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      footer.style.setProperty("--x", `${x}px`);
      footer.style.setProperty("--y", `${y}px`);
    };

    footer.addEventListener("mousemove", handleMouseMove);

    return () => {
      footer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className="relative z-[1] bg-gradient-to-r from-green-400 to-blue-400  overflow-hidden mouse-cursor-gradient-tracking">
      {/* Custom Cursor */}
      <div
        id="custom-cursor"
        className="fixed pointer-events-none h-10 w-10 rounded-full border-2 border-customGreen bg-transparent transition-all duration-150"
        style={{
          transform: "translate(-50%, -50%)",
          zIndex: "1000",
        }}
      />

      {/* Footer Top */}
      <div className="py-4 xl:pb-5 xl:pt-6">
        <Marquee pauseOnHover speed={80} gradient={false}>
          <div className="overflow-hidden">
            <div className="flex w-full items-center mb-2 gap-x-2 whitespace-nowrap">
              <Image
                src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
                alt="footer-text-slider-icon"
                width={40}
                height={40}
                className="h-7 w-7 lg:h-8 lg:w-8 mt-1 mx-2"
              />
              <div className="block font-dmSans text-1xl font-bold leading-none -tracking-[2px] text-black lg:text-4xl xl:text-5xl mt-1">
                Innovative Tech Solutions
              </div>
              <Image
                src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
                alt="footer-text-slider-icon"
                width={40}
                height={40}
                className="h-7 w-7 lg:h-8 lg:w-8 mt-1"
              />
              <div className="block font-dmSans text-1xl font-bold leading-none -tracking-[2px] text-black lg:text-4xl xl:text-5xl mt-1">
                Empowering Business Growth
              </div>
              <Image
                src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
                alt="footer-text-slider-icon"
                width={40}
                height={40}
                className="h-7 w-7 lg:h-8 lg:w-8 mt-1 mr-2"
              />
              <div className="block font-dmSans text-1xl font-bold leading-none -tracking-[2px] text-black lg:text-4xl xl:text-5xl mt-1">
                Reliable IT Support
              </div>
            </div>
          </div>
        </Marquee>
      </div>

      {/* Footer Center */}
      <div className="global-container ">
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        <div className="lg grid grid-cols-1 gap-5 py-4 md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto-auto_1fr] xl:gap-8 xl:py-5 pl-6 md:pl-8 lg:pl-10 max-w-[1200px] mx-auto">
          <div className="flex flex-col max-w-2xl">
            <Link href="/" className="inline-block">
              <Image src={XConLogo} alt="logo" width={200} height={75} />
            </Link>
            <p className="text-1xl mt-5">
              At XCon Technologies, we’re more than just a software company in
              the US. We are your partners in innovation. Let’s build the future
              together with cutting-edge IT solutions according to your business
              requirements. Contact us today to transform your software
              development ideas into reality!
            </p>

            <ul className="mt-2 flex flex-col">
              <li className="flex mt-10">
                <SocialLinks />
              </li>
              <li className="sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] p-0">
                <AWSCertificates />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <h4 className="text-lg font-semibold capitalize text-black">
              Services
            </h4>
            <ul className="flex flex-col gap-y-1 capitalize">
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  Video Editing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  IT Consulting
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <ul className="flex flex-col gap-y-1 capitalize">
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-1xl"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Subscriber Section */}
        <div className="flex flex-col items-center gap-y-4 mt-[-10px]">
          <h4 className="text-1xl font-semibold capitalize text-black text-center">
            Subscribe to our newsletter
          </h4>
          <form action="#" method="post">
            <div className="relative h-[50px] max-w-[300px]">
              <input
                type="email"
                name="newsletter-email"
                id="newsletter-email"
                placeholder="Enter your email"
                className="py-[12px] h-full w-full rounded-[50px] border-[1px] border-black px-[16px] pr-24 outline-none text-[1.125rem]"
                required=""
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-customGreen hover:bg-[#0dbf58] transition-all duration-300 ease-linear"
              >
                <Image
                  src="/assets/img_placeholder/th-1/send-icon.svg"
                  alt="send"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="h-1 mt-5 bg-[#DBD6CF]" />
      <div className="py-2 text-center text-[12px] text-black">
        &copy; {new Date().getFullYear()} XCon Technologies. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer_01;
