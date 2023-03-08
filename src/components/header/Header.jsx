import SearchBar from "../searchBar/SearchBar";
import s from "./style.module.css";

function Header({ handleSubmit, handleChange, searchTerm }) {
  return (
    <header className={s.header}>
      <nav>
        <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} searchTerm={searchTerm}/>
      </nav>
    </header>
  );
}
export default Header;
