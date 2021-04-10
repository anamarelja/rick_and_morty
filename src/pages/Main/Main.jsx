import React from "react";
import "./Main.scss";
import Card from "../../components/Card";

const Main = (props) => {
  return (
    <div className="Main">
      {props.results.map((elem) => {
        return (
          <Card
            characterName={elem.name}
            characterImage={elem.image}
            charID={elem.id}
            setCharacter={props.setCharacter}
          />
        );
      })}
    </div>
  );
};

export default Main;
