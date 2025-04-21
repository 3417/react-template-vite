import React, { memo } from 'react';
import DefineRoutes from './router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { RouterBeforeEach } from './router/auth';
import './App.less';

function App() {
  return (
    <HashRouter future={{ v7_startTransition: true }}>
      <RouterBeforeEach>
        <div className="container">
          <DefineRoutes></DefineRoutes>
        </div>
      </RouterBeforeEach>
    </HashRouter>
  );
}

export default App;

