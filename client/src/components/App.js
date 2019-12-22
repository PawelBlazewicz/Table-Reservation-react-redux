import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Main} />
      </BrowserRouter>
    </div>
  );
};

const Main = () => {
  return <div>Hello</div>;
};

export default App;
