import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Nav = () => {
  const [initialVal, setIsNavVisible] = useState(false);

  const toggleNavBar = () => {
    setIsNavVisible(!initialVal);
  
  };

  return (
    <>
      <nav>
        <div className="bar">
          <i className="fas fa-bars" onClick={toggleNavBar}></i>
        </div>
        <div className={`navBar ${initialVal ? 'navBarShow' : ''}`}>
        <ul className="lists">
          <li>
            <a href="##">Home</a>
          </li>
          <li>
            <a href="##">About</a>
          </li>
          <li>
            <a href="##">Contact</a>
          </li>
          <li>
            <a href="##">Product</a>
          </li>
        </ul>
        </div>
        <div >
          <ul className="list">
            <li>
              <a href="##">Home</a>
            </li>
            <li>
              <a href="##">About</a>
            </li>
            <li>
              <a href="##">Contact</a>
            </li>
            <li>
              <a href="##">Product</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const App = () => {
  return (
    <>
      <Nav />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
