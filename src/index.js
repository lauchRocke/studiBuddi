import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import { 
    BrowserRouter,
    Routes,
    Route,
 } from 'react-router-dom';

import App from './App';
import SignIn from './SignIn';

const root = ReactDOMClient.createRoot(
    document.getElementById('root')
)
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="SignIn" element={<SignIn />} />
    </Routes>
  </BrowserRouter>);