import React, { useEffect } from "react";
//@ts-ignore;
import * as Cesium from 'cesium/Cesium';
import "./App.css";

function App() {
  useEffect(() => {
    const viewer = new Cesium.Viewer("cesiumContainer");
  }, []);
  return (
    <div className="App">
      <div id="cesiumContainer" />
    </div>
  );
}

export default App;
