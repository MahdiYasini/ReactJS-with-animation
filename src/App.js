import React from 'react';
import './App.css'

import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

function App() {
  return (
    <>
      {/* Page 1 (Intro) */}
      <section id="page-1" className="page">
        <h1>
          Welcome To My Presentation
        </h1>
        <p>
          Ipsum ad eu consectetur ex culpa ea sit eiusmod elit cupidatat enim Lorem pariatur.
          Enim culpa minim cillum velit.Esse nisi ad cupidatat dolore qui proident.
          Amet cillum culpa cillum culpa mollit exercitation deserunt excepteur ad sit est.
          </p>
        <div>
          <a href="#page-2" className="btn">
            Next Page
          <FaArrowCircleDown />
          </a>
        </div>
      </section>
      {/* Page 2 (Intro) */}
      <section id="page-2" className="page">
        <h1>
          Page 2
        </h1>
        <p>
          Ipsum ad eu consectetur ex culpa ea sit eiusmod elit cupidatat enim Lorem pariatur.
          Enim culpa minim cillum velit.Esse nisi ad cupidatat dolore qui proident.
          Amet cillum culpa cillum culpa mollit exercitation deserunt excepteur ad sit est.
          </p>
        <div>
          <a href="#page-1" className="btn btn-dark">
            Prev Page
          <FaArrowCircleUp />
          </a>
          <a href="#page-3" className="btn">
            Next Page
          <FaArrowCircleDown />
          </a>
        </div>
      </section>
      {/* Page 3 (Intro) */}
      <section id="page-3" className="page">
        <h1>
          Page 3
        </h1>
        <p>
          Ipsum ad eu consectetur ex culpa ea sit eiusmod elit cupidatat enim Lorem pariatur.
          Enim culpa minim cillum velit.Esse nisi ad cupidatat dolore qui proident.
          Amet cillum culpa cillum culpa mollit exercitation deserunt excepteur ad sit est.
          </p>
        <div>
          <a href="#page-2" className="btn btn-dark">
            Prev Page
          <FaArrowCircleUp />
          </a>
          <a href="#page-4" className="btn">
            Next Page
          <FaArrowCircleDown />
          </a>
        </div>
      </section>
      {/* Page 4 (Intro) */}
      <section id="page-4" className="page">
        <h1>
          Page 4
        </h1>
        <p>
          Ipsum ad eu consectetur ex culpa ea sit eiusmod elit cupidatat enim Lorem pariatur.
          Enim culpa minim cillum velit.Esse nisi ad cupidatat dolore qui proident.
          Amet cillum culpa cillum culpa mollit exercitation deserunt excepteur ad sit est.
          </p>
        <div>
          <a href="#page-3" className="btn">
            Prev Page
          <FaArrowCircleUp />
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
