import React from 'react';
import { mainCourses, starters, drinks } from './MenuList';
import './MenuList.css';

const Menu = () => {
  return (
    <div className="ui segments container">
      <div className="ui segment">
        <h3 className="ui header">Przystawki</h3>
        <div className="ui items divided">
          {starters.map((course, index) => {
            return (
              <div className="item">
                <div className="ui tiny image">
                  <img src={course.img} />
                </div>
                <div className="middle aligned content" key={index}>
                  <h4 className="header">{course.title}</h4>
                  <span className="ui right floated">{course.price} PLN</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="ui segment">
        <h3 className="ui header">Dania Główne</h3>
        <div className="ui items divided">
          {mainCourses.map((course, index) => {
            return (
              <div className="item">
                <div className="ui tiny image">
                  <img src={course.img} />
                </div>
                <div className="middle aligned content" key={index}>
                  <h4 className="header">{course.title}</h4>
                  <span className="ui right floated">{course.price} PLN</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="ui segment">
        <h3 className="ui header">Napoje</h3>
        <div className="ui items divided">
          {drinks.map((course, index) => {
            return (
              <div className="item">
                <div className="ui tiny image">
                  <img src={course.img} />
                </div>
                <div className="middle aligned content" key={index}>
                  <h4 className="header">{course.title}</h4>
                  <span className="ui right floated">{course.price} PLN</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
