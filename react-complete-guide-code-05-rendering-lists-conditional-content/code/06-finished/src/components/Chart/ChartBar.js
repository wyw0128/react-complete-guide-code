import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          // NOTE: This is the way we can set dynamic style. We can create a variable to store different values for different css styles.
          // NOTE: We have to single a curly braces for outputting something dynamically but then the dynamic value is a JavaScript object which has also created with curly braces. That's why we overall have the double curly braces but it's no special style syntax.
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
