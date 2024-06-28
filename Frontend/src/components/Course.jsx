import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import pdf from "../assets/lab.pdf"
import c from "../assets/c.png"
import cpp from "../assets/cpp.jpg"
import java from "../assets/java.webp"
import python from "../assets/python.jpeg"
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([
    {
      id: 1,
      name: "C Programming",
      title: "Learn the basics of programming",
      category: "Programming",
      image:c,
      pdf: pdf
    },
    {
      id: 2,
      name: "Python",
      title: "Deep dive into JavaScript",
      category: "Web Development",
      image:python,
      pdf: pdf
    },
    {
      id: 3,
      name: "CPP ",
      title: "Master data structures and algorithms",
      category: "Computer Science",
      image:cpp,
      pdf: pdf
    },
    {
      id: 4,
      name: "Java Programing",
      title: "An introduction to machine learning",
      category: "Artificial Intelligence",
      image:java,
      pdf: pdf
    }
  ]);

  useEffect(() => {
    // If you want to fetch the data from an API, uncomment the following code
    // const getBook = async () => {
    //   try {
    //     const res = await axios.get("http://localhost:4001/book");
    //     console.log(res.data);
    //     setBook(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getBook();
  }, []);
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:mt-20">
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
         
        </div>
      </div>
      <div className="text-center ">
           <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link></div>
    </>
  );
}

export default Course;
