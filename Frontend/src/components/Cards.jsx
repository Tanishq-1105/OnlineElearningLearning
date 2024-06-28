import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-full h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border relative group">
          <figure className="relative h-2/3">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <a
                href={item.pdf}
                download={item.name}
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
              >
                Download
              </a>
            </div>
          </figure>
          <div className="card-body h-1/3 flex flex-col justify-center">
            <h2 className="card-title">
              {item.name}
              
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
