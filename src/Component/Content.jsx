import React from "react";
import Navbar from "Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "views/home";
import Search from "views/search";
import Library from "views/library";

const content = () => {
  return (
    <main className="flex-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/" element={<Search />} />
        <Route path="/library/" element={<Library />} />
      </Routes>
    </main>
  );
};

export default content;
