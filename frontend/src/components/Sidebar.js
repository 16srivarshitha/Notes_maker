import React from 'react';

function Sidebar({ categories, selectedCategory, onSelect }) {
  return (
    <div className="sidebar">
      <h2>📂 Categories</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          className={!selectedCategory ? "sidebar-item active" : "sidebar-item"}
          onClick={() => onSelect(null)}
        >
          📋 All Notes
          <span style={{ 
            marginLeft: 'auto', 
            fontSize: '0.8rem', 
            opacity: 0.7 
          }}>
            {/* You can add note count here if needed */}
          </span>
        </li>
        
        {categories.length === 0 && (
          <li style={{ 
            color: "#7b7b7b", 
            padding: "12px 16px", 
            fontStyle: "italic" 
          }}>
            No categories yet
          </li>
        )}
        
        {categories.map((cat) => (
          <li
            key={cat}
            className={selectedCategory === cat ? "sidebar-item active" : "sidebar-item"}
            onClick={() => onSelect(cat)}
          >
            🏷️ {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
