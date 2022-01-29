import React from "react";
import "./search.css";
export default function Search() {
  return (
    <div class="form">
      <form id="city-search">
        <input
          type="search"
          placeholder="Search City Here..."
          class="form-control"
          id="search-input"
        />
        <input type="submit" value="🔍" className="form-btn" />
        <input type="submit" value="📌" className="form-btn" />
      </form>
    </div>
  );
}
