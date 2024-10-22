"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import useAccordion from "@/components/hooks/useAccordion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Testimonial from "../testimonials/page";

function Services() {
  const [activeIndex, handleAccordion] = useAccordion(0);

  return (
    <>
      <Header_01 />
      <main className="main-wrapper relative overflow-hidden">

        {/* Breadcrumb Section */}
        <section
          id="section-breadcrumb"
          className="relative mb-10"
          style={{
            backgroundImage: "url('/assets/img_placeholder/th-1/Services.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '50vh',
          }}>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 z-[0]" />

          <div className="relative z-[1] flex items-center justify-center w-full h-full">
            <div className="global-container text-white">
              <div className="breadcrumb-block text-center">
                <h2 className="breadcrumb-title">Our Services</h2>
                <p className="breadcrumb-nav text-2xl pb-2">Our mission is to make your business better through technology</p>
                <ul className="breadcrumb-nav flex justify-center">
                  <li className="mr-2">
                    <Link href="/" style={{ color: 'white' }}>Home</Link>
                  </li>
                  <li className="text-white">Our Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="section-service" className="py-20">
          <div className="global-container">
            <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
              <div className="mx-auto max-w-md lg:max-w-xl xl:max-w-[950px]">
                <h2 className="text-6xl">Our Services</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Item 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <div className="relative mb-6 h-[70px] w-[70px] mx-auto">
                  <Image
                    src="/assets/img_placeholder/th-1/service-icon-black-1.svg"
                    alt="Resource Flexibility"
                    width={70}
                    height={70}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Resource Flexibility</h3>
                <p className="text-gray-600 text-center mb-6">
                  A perfect solution for startups and small businesses to scale their resources as needed.
                </p>
                <div className="text-center">
                  <Link href="/service-details" className="text-blue-600 font-semibold hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Service Item 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <div className="relative mb-6 h-[70px] w-[70px] mx-auto">
                  <Image
                    src="/assets/img_placeholder/th-1/service-icon-black-2.svg"
                    alt="Managed Services"
                    width={70}
                    height={70}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Managed Services</h3>
                <p className="text-gray-600 text-center mb-6">
                  Comprehensive management solutions for IT infrastructure and operations.
                </p>
                <div className="text-center">
                  <Link href="/service-details" className="text-blue-600 font-semibold hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Service Item 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <div className="relative mb-6 h-[70px] w-[70px] mx-auto">
                  <Image
                    src="/assets/img_placeholder/th-1/service-icon-black-3.svg"
                    alt="Web-Based Access"
                    width={70}
                    height={70}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Web-Based Access</h3>
                <p className="text-gray-600 text-center mb-6">
                  Access your services from anywhere with our secure web-based solutions.
                </p>
                <div className="text-center">
                  <Link href="/service-details" className="text-blue-600 font-semibold hover:underline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Happy Clients Section */}
        <section className="clients-section">
          <div className="pb-20 xl:pb-[150px]">
            <div className='my-10 h-[1px] w-full bg-[#DBD6CF] lg:my-16 xl:my-20'></div>
            <div className='jos mx-auto mb-12 max-w-[715px] text-center lg:mb-16'>
              <h1 className='text-4xl tracking-wide'>Our Happy Clients</h1>
            </div>

            <div className='jos brand-slider' data-jos_animation='fade'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 80,
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 100,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="flex justify-center items-center">
                    <Image
                      src='/assets/img_placeholder/th-1/client1-Photoroom.png'
                      alt='brand-1'
                      width='180'
                      height='38'
                      className='max-w-full'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center items-center">
                    <Image
                      src='/assets/img_placeholder/th-1/client2-Photoroom.png'
                      alt='brand-2'
                      width='180'
                      height='38'
                      className='max-w-full'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center items-center mt-10">
                    <Image
                      src='/assets/img_placeholder/th-1/client3.png'
                      alt='brand-3'
                      width='280'
                      height='80'
                      className='max-w-full'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center items-center mt-8">
                    <Image
                      src='/assets/img_placeholder/th-1/client4-Photoroom.png'
                      alt='brand-4'
                      width='280'
                      height='80'
                      className='max-w-full'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center items-center">
                    <Image
                      src='/assets/img_placeholder/th-1/client1-Photoroom.png'
                      alt='brand-4'
                      width='280'
                      height='80'
                      className='max-w-full'
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <Testimonial />
      </main>

      <Footer_01 />
    </>
  );
}

export default Services;
