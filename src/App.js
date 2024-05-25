import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import Layout from "./pages/Layout"

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />} />
     <Route path="/" element={<Home/>}>
     <Route path="/article/:articleId" element={<Article/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
