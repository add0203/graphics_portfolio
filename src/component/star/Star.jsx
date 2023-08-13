import React from "react";
import { FaStar } from "react-icons/fa";
// import { reviews } from "../../data";

const Star = () => {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {/* {[
        ...Array({ starCount }).map((stars) => {
          return <FaStar />;
        }),
      ]} */}
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
  );
};

export default Star;
