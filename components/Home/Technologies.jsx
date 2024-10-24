import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'; // Import Next.js Image component

const Technologies = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS with custom duration
    }, []);

    return (
        <>
            <section className="bg-white">
                <div className="max-w-7xl mx-auto my-12 text-center px-7 lg:px-8" data-aos="fade-right">
                    <h2 className="text-4xl font-bold text-black mb-2">
                        <span className="text-customGreen">Innovate</span> with the Right Software Team <br />
                    </h2>
                    <p className="text-gray-500 mb-12">
                        We&apos;re committed to helping you stay ahead of the competition with state-of-the-art digital solutions, tailored to your unique needs.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 flex items-center">
                        <div className="group flex justify-center">
                            <Image
                                src="https://nodejs.org/static/logos/nodejsDark.svg"
                                alt="Node.js Logo"
                                width={100}
                                height={100}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://seeklogo.com/images/O/open-ai-logo-FB5E1C8309-seeklogo.com.png"
                                alt="OpenAI Logo"
                                width={100}
                                height={100}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://laravel.com/img/logomark.min.svg"
                                alt="Laravel Logo"
                                width={50}
                                height={50}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-5-pack-logos-icons-2945120.png?f=webp&w=256"
                                alt="MongoDB Logo"
                                width={70}
                                height={70}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg"
                                alt="GraphQL Logo"
                                width={130}
                                height={130}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://seeklogo.com/images/M/microsoft-azure-logo-2575D39E82-seeklogo.com.png"
                                alt="Azure Logo"
                                width={50}
                                height={50}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg"
                                alt="Google Cloud Logo"
                                width={100}
                                height={100}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png"
                                alt="AWS Logo"
                                width={70}
                                height={70}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://static.xx.fbcdn.net/rsrc.php/y9/r/tL_v571NdZ0.svg"
                                alt="Meta Logo"
                                width={120}
                                height={120}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://seeklogo.com/images/M/microsoft-net-logo-631EFE744A-seeklogo.com.png"
                                alt=".NET Logo"
                                width={80}
                                height={80}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                                alt="React Logo"
                                width={70}
                                height={70}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
                                alt="Docker Logo"
                                width={80}
                                height={80}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-3/15/typescript-256.png"
                                alt="TypeScript Logo"
                                width={50}
                                height={50}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-256.png"
                                alt="Vue.js Logo"
                                width={70}
                                height={70}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://pixelpk.com/wp-content/uploads/elementor/thumbs/GjUQGYWI-qltcv6e5fgxkru4zszp61yb29uzv8x7kxc624lx5og.png"
                                alt="Logo 15"
                                width={70}
                                height={70}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/wordpress-256.png"
                                alt="WordPress Logo"
                                width={70}
                                height={70}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://seeklogo.com/images/M/microsoft-dynamics-365-logo-86E22AFA57-seeklogo.com.png"
                                alt="Microsoft Dynamics Logo"
                                width={60}
                                height={60}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://pixelpk.com/wp-content/uploads/2024/03/pps-png.png"
                                alt="Logo 18"
                                width={140}
                                height={140}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://icon.icepanel.io/Technology/svg/Express.svg"
                                alt="Express Logo"
                                width={60}
                                height={60}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://pixelpk.com/wp-content/uploads/2024/03/fluttr-flow-png.png"
                                alt="Flutter Logo"
                                width={60}
                                height={60}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://icon.icepanel.io/Technology/svg/Next.js.svg"
                                alt="Next.js Logo"
                                width={60}
                                height={60}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://pixelpk.com/wp-content/uploads/elementor/thumbs/AWS-Lambda-qltcvgqeqi310d74vdobd8vh2qw4pklzbkxwi4x4vo.png"
                                alt="AWS Lambda Logo"
                                width={100}
                                height={100}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://icon.icepanel.io/Technology/svg/TensorFlow.svg"
                                alt="TensorFlow Logo"
                                width={70}
                                height={70}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                        <div className="group flex justify-center">
                            <Image
                                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"
                                alt="Google BigQuery Logo"
                                width={80}
                                height={80}
                                className="group-hover:animate-pulse"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Technologies;
