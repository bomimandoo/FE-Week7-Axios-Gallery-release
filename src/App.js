import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';
import Article from './pages/Article';
import Layout from "./pages/Layout"
import NotFound from "./pages/NotFound";

import './App.css';


const App =() => {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />} />
     <Route path="/" element={<Home/>}>
     <Route path="/article/:articleId" element={<Article/>}/>
     <Route path="*" element={<NotFound/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
