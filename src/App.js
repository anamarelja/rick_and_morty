import "./App.css";
import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Main from "./pages/Main";
import SinglePage from "./pages/SinglePage";

const App = (props) => {
  const [results, setResults] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [charID, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      });
  }, [currentPage]);

  return (
    <div className="App">
      <Pagination changePage={setPage} currentPage={currentPage} charID={charID} setCharacter={setCharacter}/>

      {charID === null ? (
        <Main
          results={results}
          setCharacter={setCharacter}
          currentPage={currentPage}
          setPage={setPage}
        />
      ) : (
        <SinglePage
          results={results.find((e) => e.id === charID)}
          setCharacter={setCharacter}
        />
      )}
    </div>
  );
};

export default App;
