"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";

const JoinUs = () => {
    return (
        <div>

            <section
                id="section-apply"
                className="py-20 bg-black"
                style={{
                    backgroundImage: "url('/assets/img_placeholder/th-1/Web.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="global-container text-center text-white relative">
                    <h2 className="text-4xl mb-4">Ready to  <span className="text-black">Join Us?</span> </h2>
                    <p className="text-lg  mb-8">
                        If you are passionate about technology and innovation, we want to hear from you!
                    </p>
                    <Link
                        href="/contact"
                        className="button hidden rounded-[50px]  bg-white text-black after:bg-[black] hover:border-[black] hover:text-white lg:inline-block"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>
            {/*...::: Apply Now Section End :::... */}
        </div>
    )
}

export default JoinUs
