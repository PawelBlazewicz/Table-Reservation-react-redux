import React from 'react';
import Main from './Main.js';
import Reservation from './Reservation';
import Navbar from './Navbar.js'
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Navbar} />
          <Route path="/" exact component={Reservation} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
