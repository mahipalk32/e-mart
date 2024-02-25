import React from "react"
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Header />
      <div style={{position:"absolute",left:"5%", right:"5%"}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
