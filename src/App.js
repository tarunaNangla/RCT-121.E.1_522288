import React, { useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button title="PREV" id="PREV" />
        <Button id="NEXT" title="NEXT" />
      </div>
      {data.map((item) => {})}
    </div>
  );
}
