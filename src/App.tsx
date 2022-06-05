import React, { useEffect, useRef, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";

import { select, selectAll } from "d3-selection";
import DataJoins from "./DataJoins";

const App: React.FC = () => {
  // telling TS what the svg is (find this information hovering the tag)
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Selected the SVG via useRef, created a rectangle and gave it some properties

    //   select(svgRef.current)
    //     .append("rect") // creates a rectangle
    //     .attr("width", 100) // properties
    //     .attr("height", 100) // properties
    //     .attr("fill", "blue"); // properties

    // -----------------------------------------------------------------------------//

    // can also be used to select classes, id etc..
    selectAll("rect")
      .attr("width", 100)
      .attr("height", 100)
      .attr("fill", "blue")
      .attr("x", (_, index) => index * 100);
    // give the elements 100 units, so they dont stack on top of each other
  });

  return (
    <React.Fragment>
      <GlobalStyles />
      <svg ref={svgRef}>
        <rect />
        <rect />
        <rect />
      </svg>
      <DataJoins />
    </React.Fragment>
  );
};
export default App;
