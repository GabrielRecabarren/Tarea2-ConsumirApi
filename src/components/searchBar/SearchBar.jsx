import React, { useRef, useState } from "react";
import s from "./style.module.css";

function SearchBar({ handleSubmit, handleChange, searchTerm }) {
  
  
  
  return (
    <form className={s.searchBar} onSubmit={handleSubmit}>
      <input
        className={s.searchInput}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search Characters."
      />
      {/* Input controlado con el valor del estado y la función handleChange */}
    </form>
  );
}

export default SearchBar;
