import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./Main";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route index path={"/"} element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
