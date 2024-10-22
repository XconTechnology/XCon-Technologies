import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Menus = () => {
    return (
        <>
            <section id="portfolio-section">
                {/* Section Spacer */}
                <div className="pb-40 xl:pb-[220px]">
                    {/* Section Container */}
                    <div className="global-container">
                        {/* Section Content Block */}
                        <div className="jos mb-10 text-center lg:mb-16 xl:mb-20">
                            <div className="mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]">
                                <div className="text-4xl">Explore the most comprehensive and scalable digital business
                                    solution
                                </div>
                            </div>
                        </div>
                        {/* Section Content Block */}
                        {/* Portfolio List */}
                        <ul className="col-1 gap-6 md:columns-2">
                            {/* Portfolio Item */}
                            <li
                                className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                data-jos_delay="0.1"
                            >
                                <Link
                                    href="#"
                                    className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]"
                                >
                                    <Image
                                        src="/assets/img_placeholder/th-1/hmg.png"
                                        alt="portfolio-img-1"
                                        width={636}
                                        height={550}
                                        className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-customGreen lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl"
                                >
										<span className="flex-1">
											At Hustlers Media, we don’t just market.....
										</span>
                                    <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                        <Image
                                            src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                            alt="icon-black-long-arrow-right.svg"
                                            width={45}
                                            height={45}
                                        />
                                    </div>
                                </Link>
                            </li>
                            {/* Portfolio Item */}
                            {/* Portfolio Item */}
                            <li
                                className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                data-jos_delay="0.2"
                            >
                                <Link
                                    href="#"
                                    className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]"
                                >
                                    <Image
                                        src="/assets/img_placeholder/th-1/pcr.png"
                                        alt="portfolio-img-2"
                                        width={636}
                                        height={550}
                                        className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-customGreen lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl"
                                >
										<span className="flex-1">
											PCA is a Dublin and London-based structural...
										</span>
                                    <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                        <Image
                                            src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                            alt="icon-black-long-arrow-right.svg"
                                            width={45}
                                            height={45}
                                        />
                                    </div>
                                </Link>
                            </li>
                            {/* Portfolio Item */}
                            {/* Portfolio Item */}
                            <li
                                className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                data-jos_delay="0.3"
                            >
                                <Link
                                    href="#"
                                    className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]"
                                >
                                    <Image
                                        src="/assets/img_placeholder/th-1/harvest.png"
                                        alt="portfolio-img-3"
                                        width={636}
                                        height={550}
                                        className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-customGreen lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl"
                                >
										<span className="flex-1">
											At Harvest Energy, we specialize in high-quality.....
										</span>
                                    <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                        <Image
                                            src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                            alt="icon-black-long-arrow-right.svg"
                                            width={45}
                                            height={45}
                                        />
                                    </div>
                                </Link>
                            </li>
                            {/* Portfolio Item */}
                            {/* Portfolio Item */}
                            <li
                                className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                data-jos_delay="0.4"
                            >
                                <Link
                                    href="/portfolio-details"
                                    className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]"
                                >
                                    <Image
                                        src="/assets/img_placeholder/th-1/dunya.png"
                                        alt="portfolio-img-4"
                                        width={636}
                                        height={550}
                                        className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-customGreen  lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl"
                                >
										<span className="flex-1">
											Dunya Course Finder is an innovative online....
										</span>
                                    <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                        <Image
                                            src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                            alt="icon-black-long-arrow-right.svg"
                                            width={45}
                                            height={45}
                                        />
                                    </div>
                                </Link>
                            </li>
                            {/* Portfolio Item */}
                            {/* Portfolio Item */}
                            <li
                                className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                data-jos_delay="0.5"
                            >
                                <Link
                                    href="#"
                                    className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]"
                                >
                                    <Image
                                        src="/assets/img_placeholder/th-1/consultant.png"
                                        alt="portfolio-img-5"
                                        width={636}
                                        height={550}
                                        className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                    />
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-customGreen lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl"
                                >
										<span className="flex-1">
											Dunya Consultants is a leading educational
										</span>
                                    <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                        <Image
                                            src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                            alt="icon-black-long-arrow-right.svg"
                                            width={45}
                                            height={45}
                                        />
                                    </div>
                                </Link>
                            </li>
                            {/* Portfolio Item */}
                            {/* Portfolio Item */}
                            <li
                                className="jos group mb-10 flex flex-col gap-y-6 last:mb-0"
                                data-jos_delay="0.6"
                            >
                                <Link
                                    href="/portfolio-details"
                                    className="block w-full overflow-hidden rounded-[10px] group-odd:h-80 group-even:h-96 lg:group-odd:h-[550px] lg:group-even:h-[750px]"
                                >
                                    <Image
                                        src="/assets/img_placeholder/th-1/constrcution.png"
                                        alt="portfolio-img-6"
                                        width={636}
                                        height={550}
                                        className="h-full w-full scale-100 object-cover transition-all duration-300 group-hover:scale-105"
                                    />
                                </Link>
                                <Link
                                    href="/portfolio-details"
                                    className="flex items-center justify-between gap-x-6 text-xl font-bold leading-[1.4] hover:text-customGreen lg:gap-x-14 lg:text-2xl xl:gap-x-20 xl:text-3xl"
                                >
										<span className="flex-1">
											AI for large corporations and businesses across industries
										</span>
                                    <div className="h-8 w-8 lg:h-[45px] lg:w-[45px]">
                                        <Image
                                            src="/assets/img_placeholder/th-1/icon-black-long-arrow-right.svg"
                                            alt="icon-black-long-arrow-right.svg"
                                            width={45}
                                            height={45}
                                        />
                                    </div>
                                </Link>
                            </li>
                            {/* Portfolio Item */}
                        </ul>
                        {/* Portfolio List */}
                    </div>
                    {/* Section Container */}
                </div>
                {/* Section Spacer */}
            </section>

        </>
    );
};

export default Menus;