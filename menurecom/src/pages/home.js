import React from "react";
import './home.css';
import { Link } from 'react-router-dom';

const Page = () => {

  return (
    <div className="home">
        <h1 className="welcome">
         Don't know what to eat? 
         <br></br>
         Use MenuRecom to know what you want!
        </h1>
        
        <Link to="./page1" className="start-button">Start Now!</Link>

        <footer className="footer">
          July 03 2024 @MenuRecom
        </footer>
    </div>
  );
};

export default Page;
