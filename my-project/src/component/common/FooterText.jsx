import React from "react";

function FooterText({ items, className }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          className={`text-gray-700 hover:text-black cursor-pointer ${className}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default FooterText;
