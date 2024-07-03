import React from "react";
import './page1.css';
import { Link } from 'react-router-dom';


const Page = () => {
  return (
    <div>
        <h1>
          <p className="question">
         Let's Start!
         <br></br>
         Do you want a snack or a meal?</p>
         <ul className="button-list">
         <Link to="./snack" className="button">Snack</Link>
         <Link to="./meal" className="button">Meal</Link>
        </ul>
        </h1>
        
    </div>
  );
};

export default Page;
