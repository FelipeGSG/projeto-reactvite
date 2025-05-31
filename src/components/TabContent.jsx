import React from 'react';

export default function TabContent({ items }) {
  return (
    <div className="tab-content">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="tab-item">
            <span className="dot"></span>
            <a href={`#${item.anchor}`} className="tab-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
