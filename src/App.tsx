import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./Main";
import { HashRouter, Route, Routes } from "react-router-dom";
import Test from "./Test";

function App() {
  return (
    <>
      <Routes>
        <Route index path={"/"} element={<Main />} />
        <Route path={"/test"} element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
