import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
