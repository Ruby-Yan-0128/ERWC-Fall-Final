import React from "react";
export default function TextBox({ placeholder = "Type here...", value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "8px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        margin: "8px 0"
      }}
    />
  );
}