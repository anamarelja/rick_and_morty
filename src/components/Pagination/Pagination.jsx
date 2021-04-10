import React from "react";
import "./Pagination.scss";

const Pagination = (props) => {

  var arr;
  if (props.currentPage < 4) {
    arr = Array.from(Array(6).keys()).slice(1);
  } else if (props.currentPage >= 4 && props.currentPage < 31) {
    arr = Array.from(Array(5).keys()).map((e) => e + props.currentPage - 2);
  } else if (props.currentPage >= 31 && props.currentPage < 35) {
    arr = [30, 31, 32, 33, 34];
  }

  console.log(props.currentPage)
  console.log(arr.find(e=> e===props.currentPage))

  return (
    <div className="Pagination">
      { !props.charID ? (
        <div>
          <button className="Previous" onClick={() => props.changePage(props.currentPage - 1)}>
            « Previous
          </button>
          {arr.map((elem) => {
            return (
              <button
                className={`PaginationButton ${ elem === props.currentPage ? 'activePage' : null}`}
                onClick={() => props.changePage(elem)}
              >
                {elem}
              </button>
            );
          })}
          <button className="Next" onClick={() => props.changePage(props.currentPage + 1)}>
            Next »
          </button>
        </div>
      ) : (
        <button className="Back" onClick={() => {
          props.changePage(props.currentPage)
          props.setCharacter(null)
        }
        
        }>
          « Back to Search
        </button>
      )}
    </div>
  );
};

export default Pagination;
