import React, { memo } from 'react';
import DefineRoutes from './router';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import './App.less';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <DefineRoutes></DefineRoutes>
      </div>
    </HashRouter>
  );
}

export default App;

