import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Contact() {
    const staffMembers = [
        {
            name: "Mujaheed Basha",
            email: "mujahidbasha@gmail.com",
            phone: "9063739736",
            linkedin: "https://www.linkedin.com/in/johndoe"
        },
        {
            name: "chandhanam pavan",
            email: "chpavan@gmail.com",
            phone: "8978121568",
            linkedin: "https://www.linkedin.com/in/janesmith"
        },
        {
            name: "harsha vardhan",
            email: "harsha17@gmail.com",
            phone: "+9398421839",
            linkedin: "https://www.linkedin.com/in/emilyjohnson"
        },
        {
            name: "Bobbala Tanishq reddy",
            email: "btanishqreddy@gmail.com",
            phone: "6300672305",
            linkedin: "https://www.linkedin.com/in/michaelbrown"
        }
    ];

    return (
        <>
            <Navbar />
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col my-10">
                <div className="flex flex-col items-center md:mt-10 md:items-start">
                   
                    <h1 className="text-2xl md:text-4xl font-bold mb-9">Contact Us</h1>
                </div>
                <div className="w-full flex flex-col space-y-12">
                    {staffMembers.map((member, index) => (
                        <div key={index} className="border p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl md:text-2xl font-semibold">{member.name}</h2>
                            <p className="text-md md:text-lg">{member.position}</p>
                            <p className="text-sm md:text-xl mt-2">
                                <strong>Email:</strong> <a href={`mailto:${member.email}`} className="text-blue-500">{member.email}</a>
                                <br />
                                <strong>Phone:</strong> <a href={`tel:${member.phone}`} className="text-blue-500">{member.phone}</a>
                                <br />
                                <strong>LinkedIn:</strong> <a href={member.linkedin} className="text-blue-500">{member.linkedin}</a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
