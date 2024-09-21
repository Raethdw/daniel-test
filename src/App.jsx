import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayoud from './page/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayoud/>} />
      </Routes>
    </Router>
  );
};

export default App;
