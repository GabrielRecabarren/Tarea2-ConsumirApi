import React from "react";
import Character from "../characters/Character";
import s from "./style.module.css";

function CharacterList({ characters, filteredTerm }) {
  return (
    <div className={s.container}>
      <h1>Characters</h1>
      <ul className={s.characterList}>
        {filteredTerm
          ? filteredCharacters.map((character) => (
              <Character key={index} character={character} />
            ))
          : characters.map((character, index) => (
              <Character key={index} character={character} />
            ))}
      </ul>
    </div>
  );
}

export default CharacterList;
