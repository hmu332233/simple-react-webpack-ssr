import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact render={() => <h1>Main App</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
