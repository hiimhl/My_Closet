import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../routes/Home";

function Router(){
  return<HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </HashRouter>
}

export default Router