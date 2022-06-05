import React, { useEffect, useState, useRef } from "react";
import { select, Selection } from "d3-selection";

//{ width: 200, height: 100, color: "cyan" }
const data = [
  { units: 150, color: "purple" },
  { units: 120, color: "green" },
  { units: 80, color: "orange" },
  { units: 100, color: "grey" },
  { units: 210, color: "yellow" },
];

const DataJoins: React.FC = () => {
  const [selection, setSelection] = useState<null | Selection<
    null,
    unknown,
    null,
    undefined
  >>(null);

  const svgRef = useRef(null);

  useEffect(() => {
    if (!selection) {
      setSelection(select(svgRef.current));
    } else {
      //   selection
      //     .data(data) => accepts an object with all the information
      //     .append("rect")
      //     .attr("width", (d) => d.width) =>  all the attr can get it normaly
      //     .attr("height", (d) => d.height)
      //     .attr("fill", (d) => d.color);
      const rects = selection
        .selectAll("rect")
        .data(data)
        .attr("width", 100)
        .attr("height", (d) => d.units)
        .attr("fill", (d) => d.color)
        .attr("x", (_, index) => index * 100);

      rects
        .enter()
        .append("rect")
        .attr("width", 100)
        .attr("height", (d) => d.units)
        .attr("fill", (d) => d.color)
        .attr("x", (_, index) => index * 100);
    }
  }, [selection]);

  return (
    <svg ref={svgRef} width={500}>
      <rect />
      <rect />
      <rect />
    </svg>
  );
};
export default DataJoins;
