import React from "react";
import githubcat from '../../icon_.png'



function Header() {
  return (
      <div className="hero-content justify-start text-start">
        <div className="max-w-3xl">
          <div className="flex items-center">
          <img width={60} src={githubcat} className="inline mr-3" alt="" />
            <p className="text-5xl font-bold">GitFind.</p>
          </div>
          <p className="py-6 leading-loose">
          🚀 With the power of open-source, 🌎 you can Search & Find awesome coders 👩‍💻 to collaborate with, and you can also check their coolest projects using GitFind 🐱.
          </p>
        </div>
      </div>
  );
}

export default Header;
