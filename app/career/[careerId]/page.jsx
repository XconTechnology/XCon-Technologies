"use client"
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header_01 from "@/components/header/Header_01";
import Link from "next/link";
import Image from "next/image";

const JobDetail = () => {
    const { careerId } = useParams(); // Use useParams to get the route parameter
    const [job, setJob] = useState(null);

    useEffect(() => {
        if (careerId) {
            const jobs = [
                {id:1 ,name: "Senior Web Developer", description: "Develop and maintain complex web applications. Work with cross-functional teams to deliver high-quality solutions.", mode: "Onsite", jobType: "Morning", salary: "$200 - $300", bgColor: "bg-green-500" },
                {id:2, name: "Front End Developer", description: "Develop and maintain complex web applications. Work with cross-functional teams to deliver high-quality solutions.", mode: "Onsite", jobType: "Morning", salary: "25K - 30K", bgColor: "bg-green-500" },
                {id:3, name: "Junior Web Developer", description: "Develop and maintain complex web applications. Work with cross-functional teams to deliver high-quality solutions.", mode: "Onsite", jobType: "Morning", salary: "15K - 20K", bgColor: "bg-green-500" },

                {
                    id: 4,
                    name: "Business Development Manager",
                    Longdescription: "XCon Technologies is searching for a highly motivated, results-driven Commission-Based Business Development Sales Manager to drive client acquisition for our web development, IT solutions, and digital marketing services. This role is perfect for a skilled sales leader passionate about tech and digital solutions, who enjoys relationship-building and working in a performance-oriented environment.",
                    Key_Responsibilities: [
                        "Identify Opportunities: Proactively source and approach potential clients needing web development, IT solutions, and digital marketing services.",
                        "Build and Maintain Client Relationships: Establish strong connections with both new and existing clients, serving as a trusted advisor.",
                        "Service Promotion: Present XCon Technologies' services, from website development and IT infrastructure to digital marketing and social media management, to meet client needs.",
                        "Lead Sales Meetings: Conduct client presentations, product demos, and follow-ups to secure deals.",
                        "Negotiate and Close Deals: Finalize contract terms and agreements, ensuring a seamless onboarding for new clients.",
                        "Collaborate with Internal Teams: Work closely with our development and marketing teams to ensure that client requirements are met.",
                        "Market Awareness: Stay informed on industry trends and competitors to strategically position XCon Technologies.",
                        "Meet Sales Targets: Drive revenue by meeting or exceeding individual sales goals, with uncapped earning potential through a competitive commission structure."
                    ],
                    What_We_Offer: [
                        "Competitive Commissions: Earn uncapped commissions based on your performance.",
                        "Flexible, Remote Work: Manage your schedule and work from anywhere.",
                        "Growth Opportunity: Represent an innovative company in the IT and digital marketing sector.",
                        "Sales Support: Access to marketing resources to enhance your client outreach."
                    ],
                    Qualifications: [
                        "Proven Sales Experience: Track record in business development, ideally in IT, web services, or digital marketing.",
                        "Strong Network: Established connections and the ability to generate leads.",
                        "Exceptional Communication Skills: Clear and persuasive in presentations, negotiation, and client relations.",
                        "Self-Motivated and Goal-Oriented: Ability to work independently to drive results.",
                        "Technical Knowledge: Familiarity with web development, IT solutions, and social media marketing is a plus."
                    ],

                    mode: "Remote",
                    jobType: "Evening",
                    Experience: "1+",
                    salary: "$3000 - $4500",

                },
                {id:5, name: "Content writer", description: "XCon Technologies is searching for a okkddad jaojsdoajsd highly motivated, results-driven Commission-Based Business Development Sales Manager to drive client acquisition for our web development, IT solutions, and digital marketing services.", mode: "Remote", jobType: "Evening", salary: "$3000 - $4500", bgColor: "bg-gray-800" },
                {id:6, name: "Content writer", description: "XCon Technologies is searching for a highly motivated, results-driven Commission-Based Business Development Sales Manager to drive client acquisition for our web development, IT solutions, and digital marketing services.", mode: "Remote", jobType: "Evening", salary: "$200 - $300", bgColor: "bg-gray-800" },
                {id:7, name: "Content writer", description: "XCon Technologies is searching for a highly motivated, results-driven Commission-Based Business Development Sales Manager to drive client acquisition for our web development, IT solutions, and digital marketing services.", mode: "Remote", jobType: "Evening", salary: "$000 - $500", bgColor: "bg-gray-800" },
            ];

            const foundJob = jobs.find((j) => j.id === parseInt(careerId));
            setJob(foundJob || null);
        }
    }, [careerId]);

    if (!job) return <p>Loading...</p>;

    return (
        <>
            <Header_01/>
            <main className="main-wrapper relative overflow-hidden">
                <section
                    id="section-breadcrumb"
                    className="relative"
                    style={{
                        backgroundImage: "url('/assets/img_placeholder/th-1/Jobs.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "70vh",
                    }}
                >
                    <div className="relative z-[1] flex items-center justify-center w-full h-full">
                        <div className="global-container text-white text-center">
                            <div className="breadcrumb-block">
                                <div className="text-6xl breadcrumb-title">{job.name}</div>
                                <ul className="breadcrumb-nav flex text-white justify-center">
                                    <li>
                                        <Link href="/" style={{color: "white"}}>Home</Link>
                                    </li>
                                    <li>
                                        <span>
                                            <Image
                                                src="/assets/img_placeholder/th-1/try.svg"
                                                alt="Background"
                                                height={10}
                                                width={10}
                                            />
                                        </span>
                                    </li>
                                    <li>
                                        <div className="text-white">Career</div>
                                    </li>
                                    <li>
                                        <span>
                                            <Image
                                                src="/assets/img_placeholder/th-1/try.svg"
                                                alt="Background"
                                                height={10}
                                                width={10}
                                            />
                                        </span>
                                    </li>
                                    <li>
                                        <div className="text-customGreen">Job Detail</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="flex flex-col md:flex-row p-6 bg-gray-50 mx-4">
                {/* Sidebar */}
                <aside className="md:w-1/4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Job Information</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-semibold">Company Name:</p>
                            <p>XCon Technologies</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Job Mode:</p>
                            <p>{job.mode}</p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold">Job Type:</p>
                            <p>{job.name}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Experience:</p>
                            <p>{job.Experience}</p>
                        </div>

                        <div>
                            <p className="text-sm font-semibold">Salary:</p>
                            <p>{job.salary}</p>
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Date Posted:</p>
                            <p>14th November, 2024</p>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main
                    className="md:w-2/3 md:ml-6 mt-6  md:mt-0 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                    <section className="mb-6">
                        <h2 className="text-2xl tracking-normal	 font-semibold mb-4">Job Description:</h2>

                        <p className={"text-lg font-normal"}>
                            {job.Longdescription}
                        </p>

                    </section>

                    <section className="mb-6">
                        <h3 className="text-2xl tracking-normal font-semibold mb-3">Responsibilities and Duties:</h3>
                        <div className="mt-2 space-y-3">
                            <ul className="list-disc pl-5">
                                {job.Key_Responsibilities.map((responsibility, index) => (
                                    <li key={index} className="text-lg font-normal">{responsibility}</li>
                                ))}
                            </ul>
                        </div>

                    </section>
                    <section className="mb-6">
                        <h3 className="text-2xl tracking-normal font-semibold mb-3">What We Offer:</h3>
                        <div className="mt-2 space-y-3">
                            <ul className="list-disc pl-5">
                                {job.What_We_Offer.map((offer, index) => (
                                    <li key={index} className="text-lg font-normal">{offer}</li>
                                ))}
                            </ul>
                        </div>

                    </section>

                    <section>
                        <h3 className="text-2xl tracking-normal font-semibold mb-3">Qualifications:</h3>
                        <div className="mt-2 space-y-3">
                            <ul className="list-disc pl-5">
                                {job.Qualifications.map((Qualification, index) => (
                                    <li key={index} className="text-lg font-normal">{Qualification}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                        Apply Now
                    </button>
                </main>
            </div>
        </>
    );
};

export default JobDetail;
