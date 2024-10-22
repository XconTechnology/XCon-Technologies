import Image from "next/image";
import Link from "next/link";
import xConLogo from "../../public/assets/img_placeholder/Dark Logo.png";
import Marquee from "react-fast-marquee";
import "swiper/swiper-bundle.css";
// import AWSCertificates from "@/components/AWSCertificates/AWSCertificates";
// import SocialLinks from "@/components/SocialLinks/page";

const Footer_01 = () => {
  return (
    <footer className="relative z-[1] overflow-hidden bg-colorLinenRuffle ">
      {/* Footer Top */}
      <div className="py-[20px] xl:pb-[50px] xl:pt-[80px]">
        <Marquee pauseOnHover speed={80} gradient={false}>
          <div className="overflow-hidden">
            <div className="flex w-full items-center mb-5 gap-x-[20px] whitespace-nowrap">
              {/* First Image Icon with space after it */}
              <Image
                src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
                alt="footer-text-slider-icon"
                width={60}
                height={60}
                className="h-11 w-11 lg:h-[60px] lg:w-[60px] mt-[10px] mx-[20px] "
              />
              <div className="block font-dmSans text-5xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl mt-[10px]">
                Innovative Tech Solutions
              </div>
              <Image
                src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
                alt="footer-text-slider-icon"
                width={60}
                height={60}
                className="h-10 w-10 lg:h-[60px] lg:w-[60px] mt-[10px]"
              />
              <div className="block font-dmSans text-5xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl mt-[10px]">
                Empowering Business Growth
              </div>
              <Image
                src="/assets/img_placeholder/th-1/footer-text-slider-icon.svg"
                alt="footer-text-slider-icon"
                width={60}
                height={60}
                className="h-10 w-10 lg:h-[60px] lg:w-[60px] mt-[10px] mr-4" // Added margin-right here
              />
              <div className="block font-dmSans text-5xl font-bold leading-none -tracking-[2px] text-black lg:text-6xl xl:text-7xl mt-[10px]">
                Reliable IT Support
              </div>
            </div>
          </div>
        </Marquee>
      </div>

      {/* Footer Center */}
      <div className="global-container">
        <div className="h-[1px] w-full bg-[#DBD6CF]" />
        <div className="lg grid grid-cols-1 gap-10 py-[40px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto-auto_1fr] xl:gap-20 xl:py-[60px] pl-4 md:pl-8 lg:pl-10">
          {/* Footer Widget */}
          <div className="flex flex-col gap-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={xConLogo}
                alt="logo"
                width={300}
                height={75}
                className="h-auto w-full max-w-[192px]"
              />
            </Link>
            <p className="text-xl">
              At XCon Technologies, we’re more than just a software company in US. We are your partners in innovation. Let’s build the future together with cutting-edge IT solutions according to your business requirements. Contact us today to transform your software development ideas into reality!
            </p>

            <ul className="mt-4 flex flex-col gap-y-4 lg:gap-y-6 w-full">
              {/* Social Media Links */}
              <li className="flex">
                {/*<SocialLinks />*/}
              </li>

              {/* AWS Certificates */}
              <li>
                <div className="flex">
                  <div className="w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
                    {" "}
                    {/* Responsive width adjustments */}
                    {/*<AWSCertificates />*/}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Footer Widget for Services */}
          <div className="flex flex-col gap-y-6">
            <h4 className="text-[24px] font-semibold capitalize text-black">
              Services
            </h4>
            <ul className="flex flex-col gap-y-[10px] capitalize">
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-xl"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-xl"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-xl"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-xl"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-xl"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Widget for Utility Pages */}
          <div className="flex flex-col gap-y-6">
            <ul className="flex flex-col gap-y-[10px] capitalize">
              <li>
                <Link
                  href="/privacy-policy"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-xl"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-xl"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="transition-all duration-300 ease-linear hover:text-customGreen text-xl"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Subscriber Section */}
        <div className="flex flex-col items-center gap-y-6 mt-[-30px]">
          <h4 className="text-[24px] font-semibold capitalize text-black text-center">
            Subscribe to our newsletter
          </h4>
          <form action="#" method="post">
            <div className="relative h-[50px] max-w-[300px]">
              <input
                type="email"
                name="newsletter-email"
                id="newsletter-email"
                placeholder="Enter your email"
                className="p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black px-[24px] pr-20 outline-none text-xl"
                required=""
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-customGreen hover:bg-[#0dbf58] transition-all duration-300 ease-linear"
              >
                <Image
                  src="/assets/img_placeholder/th-1/send-icon.svg"
                  alt="send"
                  width={14}
                  height={14}
                />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-colorLinenRuffle py-[20px] text-center">
        <p className="text-[#707070]">
          &copy; {new Date().getFullYear()} XCON Technologies. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer_01;
