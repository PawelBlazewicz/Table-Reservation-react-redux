import React from 'react';
import {mainCourses, starters, drinks } from './MenuList'
import './MenuList.css';

const Menu = () => {
  return (
    <div>
        <h1>Menu</h1>
        <ul>Przystawki</ul>
        {starters.map((course, index) => {
            console.log(course);
            return <li key={index}>
                {course.title} Cena: {course.price} PLN
                <br />
                <img className="image" src={course.img}/>
                </li>
        })}
        <ul>Dania Główne</ul>
        {mainCourses.map((course, index) => {
            console.log(course);
            return <li key={index}>
                {course.title} Cena: {course.price} PLN
                <br />
                <img className="image" src={course.img}/>
                </li>
        })}
        <ul>Napoje</ul>
        {drinks.map((course, index) => {
            console.log(course);
            return <li key={index}>
                {course.title} Cena: {course.price} PLN
                <br />
                <img className="image" src={course.img}/>
                </li>
        })}
    </div>

  );
};

export default Menu;
