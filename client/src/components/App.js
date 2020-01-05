import React from 'react';
import Main from './Main.js';
import Reservation from './Reservation';
import Header from './Header.js';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Main} />
          <Route path="/Reservation" exact component={Reservation} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
