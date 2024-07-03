import React from "react";
import './page1.css';
import { Link } from 'react-router-dom';


const Page = () => {
  return (
    <div>
        <h1>
         Do you want ______ or ________?
         <ul className="button-list">
         <Link to="./snack" className="button">Snack</Link>
         <Link to="./meal" className="button">Meal</Link>
        </ul>
        </h1>
        
    </div>
  );
};

export default Page;
