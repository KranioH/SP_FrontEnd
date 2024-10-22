import React from "react";
import { FaUpload } from "react-icons/fa";
import "../css/Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <iframe
          src="https://app.powerbi.com/view?r=eyJrIjoiYjBkMzk4OTUtMjUxNi00NzlmLWE5ZjctZDc2OTg5NmM0ZTY5IiwidCI6ImFmMTNjMjI1LTBmMDctNGM1Yi04YTRiLTFhYjJjYjliMzUzYyJ9"
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
