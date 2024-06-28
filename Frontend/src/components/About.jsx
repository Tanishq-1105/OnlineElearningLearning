import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function About(){
    return(
        <>
         <Navbar />
         <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1  md:mt-36">
          <div className="space-y-8">
           
            <p className="text-sm md:text-xl">
            Welcome to our <span className="text-pink-500"> e-learning platform</span>, where education meets innovation. We are dedicated to providing high-quality, accessible, and engaging online courses to learners around the globe. Our mission is to empower individuals by offering educational opportunities that are both relevant and practical, helping you to gain the skills needed to excel in your career and personal growth.We collaborate with industry experts and thought leaders to develop content that is current and impactful. Whether you're looking to advance in your professional life, change careers, or simply pursue a passion, our courses cover a diverse range of disciplines tailored to meet your needs. Our curriculum is designed to cater to all learning styles and levels, from beginners to advanced learners.Our platform offers flexible learning schedules, allowing you to study at your own pace, anytime and anywhere. Interactive resources, such as quizzes, videos, and discussion forums, enhance your learning experience, making it more dynamic and engaging. We also foster a supportive community where you can connect with fellow learners, share insights, and grow together.Join us on this educational journey and be a part of a community committed to lifelong learning. Unlock your potential, achieve your goals, and transform your future with our comprehensive and innovative e-learning solutions.</p>

            
          </div>
        </div>
        
      </div>
         
         
         <Footer/>
        </>
    );
}


export default About;