import React from "react";
import Navbar from "../Navbar/Navbar";
import "./MainHeader.scss";

const MainHeader = () => {
  return (
    <div id="main-header">
      <Navbar />
      <div className="title">
        <h1>
          Archivio <br />
          Storico
        </h1>
        <div className="sub-title">
          Una raccolta di tutti i momenti più importanti nella storia del museo
          e dei suoi curatori.
        </div>
      </div>
    </div>
  );
};
export default MainHeader;
