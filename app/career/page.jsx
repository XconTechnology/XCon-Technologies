"use client";
import Footer_01 from "@/components/footer/Footer_01";
import Header_01 from "@/components/header/Header_01";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

function Career() {
    const [visibleJobCount, setVisibleJobCount] = useState(5); // Initially show 5 jobs
    const [filteredJobs, setFilteredJobs] = useState([]); // For storing filtered job results
    const [searchKeyword, setSearchKeyword] = useState(""); // Store the search keyword
    const [selectedField, setSelectedField] = useState(""); // Store the selected field

    // Define the list of job postings
    const jobs = [
        { name: "Senior Web Developer", description: "Develop and maintain complex web applications. Work with cross-functional teams to deliver high-quality solutions.", mode: "Onsite", jobType: "Morning", salary: "30K - 40K", bgColor: "bg-green-500" },
        { name: "Front End Developer", description: "Develop and maintain complex web applications. Work with cross-functional teams to deliver high-quality solutions.", mode: "Onsite", jobType: "Morning", salary: "25K - 30K", bgColor: "bg-green-500" },
        { name: "Junior Web Developer", description: "Develop and maintain complex web applications. Work with cross-functional teams to deliver high-quality solutions.", mode: "Onsite", jobType: "Morning", salary: "15K - 20K", bgColor: "bg-green-500" },
        { name: "Business Development Manager", description: "XCon Technologies is searching for a highly motivated, results-driven Commission-Based Business Development Sales Manager to drive client acquisition for our web development, IT solutions, and digital marketing services.", mode: "Remote", jobType: "Evening", salary: "$3000 - $4500", bgColor: "bg-gray-800" },
        { name: "Content writer", description: "XCon Technologies is searching for a okkddadjaojsdoajsd highly motivated, results-driven Commission-Based Business Development Sales Manager to drive client acquisition for our web development, IT solutions, and digital marketing services.", mode: "Remote", jobType: "Evening", salary: "$3000 - $4500", bgColor: "bg-gray-800" },
        { name: "Content writer", description: "XCon Technologies is searching for a highly motivated, results-driven Commission-Based Business Development Sales Manager to drive client acquisition for our web development, IT solutions, and digital marketing services.", mode: "Remote", jobType: "Evening", salary: "$3000 - $4500", bgColor: "bg-gray-800" },
    ];

    // Set initial jobs to display
    useEffect(() => {
        setFilteredJobs(jobs.slice(0, visibleJobCount)); // Display only the initial visibleJobCount
    }, [visibleJobCount]);

    // Filter jobs based on search criteria
    const handleSearch = () => {
        const filtered = jobs.filter((job) => {
            const matchesKeyword = job.name.toLowerCase().includes(searchKeyword.toLowerCase());
            const matchesField = selectedField === "" || job.name.toLowerCase().includes(selectedField.toLowerCase());
            return matchesKeyword && matchesField;
        });

        setFilteredJobs(filtered.slice(0, visibleJobCount)); // Filter and reset to visibleJobCount
    };

    // Function to load all jobs or collapse to initial 5 jobs
    const toggleJobs = () => {
        if (visibleJobCount >= jobs.length) {
            setVisibleJobCount(5); // Reset to show first 5 jobs
        } else {
            setVisibleJobCount(jobs.length); // Show all jobs
        }
    };

    return (
        <>
            <Header_01 />
            <main className="main-wrapper relative overflow-hidden">
                <section
                    id="section-breadcrumb"
                    className="relative"
                    style={{
                        backgroundImage: "url('/assets/img_placeholder/th-1/Careers.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "70vh",
                    }}
                >
                    <div className="relative z-[1] flex items-center justify-center w-full h-full">
                        <div className="global-container text-white text-center">
                            <div className="breadcrumb-block">
                                <h2 className="breadcrumb-title">Careers</h2>
                                <ul className="breadcrumb-nav flex text-white justify-center">
                                    <Link href="/" style={{ color: "white" }}>Home</Link>
                                    <span className="">
                                        <Image
                                            src="/assets/img_placeholder/th-1/try.svg"
                                            alt="Background"
                                            height={10}
                                            width={10}
                                        />
                                    </span>
                                    <div className="text-customGreen">Career</div>
                                </ul>
                            </div>
                            <div
                                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-3/4 p-4 bg-white rounded-lg shadow-md">
                                <div className="flex justify-evenly items-center">
                                    <input
                                        type="text"
                                        placeholder="Enter Keyword"
                                        value={searchKeyword}
                                        onChange={(e) => setSearchKeyword(e.target.value)}
                                        className="p-3 w-1/4 border border-gray-300 text-gray-800 rounded-md mr-2"
                                    />
                                    <select
                                        value={selectedField}
                                        onChange={(e) => setSelectedField(e.target.value)}
                                        className="p-3 w-1/4 border border-gray-300 rounded-md mr-2 bg-gray-100 text-gray-800"
                                    >
                                        <option value="">Choose your field</option>
                                        <option>WordPress Developer</option>
                                        <option>Web Developer</option>
                                        <option>Front End Developer</option>
                                        <option>SEO</option>
                                        <option>Content Writer</option>
                                        <option>Graphic Designer</option>
                                        <option>Video Editor</option>
                                        <option>Business Developer</option>
                                        <option>Digital Marketing</option>
                                    </select>
                                    <button
                                        onClick={handleSearch}
                                        className="bg-customGreen text-white py-3 px-6 rounded-md"
                                    >
                                        Job Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto p-6">
                    <table className="w-full text-left bg-white rounded-lg shadow-lg overflow-hidden">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="p-4">Save</th>
                            <th className="p-4">Name & Description</th>
                            <th className="p-4">Mode</th>
                            <th className="p-4">Job Type</th>
                            <th className="p-4">Salary</th>
                            <th className="p-4">Apply</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job, index) => (
                                <tr key={index} className="border-t hover:bg-gray-50">
                                    <td className="p-4 text-center">
                                        <button
                                            className="text-gray-500 text-[30px] font-bold hover:text-red-500">&#9825;</button>
                                    </td>
                                    <td className="p-4 text-gray-800">
                                        <div className="font-semibold">{job.name}</div>
                                        <div className="text-gray-500 text-sm whitespace-normal break-words mt-1">
                                            {job.description}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 rounded-full text-white bg-yellow-500 text-[14px]">
                                            {job.mode}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span
                                            className={`px-3 py-1 text-[14px] rounded-full text-white ${job.bgColor}`}>
                                            {job.jobType}
                                        </span>
                                    </td>
                                    <td className="p-4 text-[14px] text-gray-700">{job.salary}</td>
                                    <td className="p-4 text-center">
                                        <button
                                            className="bg-white border text-[14px] border-gray-300 text-gray-800 px-14 py-2 rounded hover:bg-customGreen hover:text-white">
                                            Apply
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-4 text-center text-gray-500">No jobs found</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center mt-6 mb-8">
                    <button
                        onClick={toggleJobs}
                        className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded hover:text-white hover:bg-customGreen"
                    >
                        {visibleJobCount < jobs.length ? "Load More Jobs" : "Show Less Jobs"}
                    </button>
                </div>

                <Footer_01 />
            </main>
        </>
    );
}

export default Career;
