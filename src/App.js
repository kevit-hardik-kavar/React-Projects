import React from "react";
import "./App.css";
import NavigationBar from "./Components/Navigation/NavigationBar";
import LeftSidebar from "./Components/Sidebars/LeftSidebar";
import RightSidebar from "./Components/Sidebars/RightSidebar";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <div className="containers">
        <div className="left">
          <LeftSidebar />
        </div>
        <div className="center">
          <Main />
        </div>
        <div className="right">
          <RightSidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
