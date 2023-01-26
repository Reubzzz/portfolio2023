import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { HashRouter, Routes, Route } from "react-router-dom";
import Threejsdemo from './Components/DemoPages/ThreeJsDemo/ThreeJsPortalDemo'


import Level4 from './Components/CertifcatePages/Level4.js'
import Level5 from './Components/CertifcatePages/Level5.js'
import Level6 from './Components/CertifcatePages/Level6.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
 <Routes>
          <Route path="/" element={<App/>} />
          <Route path ="/ThreeJsDemo" element={<Threejsdemo />} />


          <Route path ="/Level4Page" element={<Level4 />} />
          <Route path ="/Level5Page" element={<Level5 />} />
          <Route path ="/Level6Page" element={<Level6 />} />

 </Routes>
 </HashRouter>
  </React.StrictMode>
);

