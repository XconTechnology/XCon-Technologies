import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialLinks = () => {
    return (
        <section id="social-links-service">
            <div className="global-container"></div>
            <ul className="mt-auto flex gap-x-[15px] justify-center">
                <li>
                    <Link
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/xcontechnologies/"
                        className="group relative flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black hover:bg-customGreen transition-all duration-300 hover:h-[50px] hover:w-[50px]"
                    >
                        <Image
                            src="/assets/img_placeholder/th-1/facebook-icon-white.svg"
                            alt="facebook"
                            width={20}
                            height={20}
                            className="opacity-100"
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/company/xcon-technologies/"
                        className="group relative flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black hover:bg-customGreen transition-all duration-300 hover:h-[50px] hover:w-[50px]"
                    >
                        <Image
                            src="/assets/img_placeholder/th-1/linkedin-icon-white.svg"
                            alt="linkedin"
                            width={20}
                            height={20}
                            className="opacity-100"
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/xcontech/"
                        className="group relative flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black hover:bg-customGreen transition-all duration-300 hover:h-[50px] hover:w-[50px]"
                    >
                        <Image
                            src="/assets/img_placeholder/th-1/instagram-icon-white.svg"
                            alt="instagram"
                            width={20}
                            height={20}
                            className="opacity-100"
                        />
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default SocialLinks;
