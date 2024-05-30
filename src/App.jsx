import React from "react";
import Weather from "./components/Weather";
import './App.css'

const App = () => {
  return (
    <>
    <div className="app-background h-screen w-screen p-5">
      <Weather/>
    </div>
    </>
  );
};

export default App;
