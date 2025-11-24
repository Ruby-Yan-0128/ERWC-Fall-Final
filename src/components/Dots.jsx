import React from "react";
export default function Dots({ count = 5 }) {
  // Create an array with 'count' items
  const dotsArray = Array.from({ length: count });

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {dotsArray.map((_, idx) => (
        <span
          key={idx}
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#333",
            display: "inline-block"
          }}
        />
      ))}
    </div>
  );}