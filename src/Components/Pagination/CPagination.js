import React from "react";
import style from "./Pagination.css";
import left from "../../images/left.png";
import right from "../../images/right.png";

const CPagination = ({ goToCurrentPage, prevPage, nextPage, page ,pageLimit}) => {

  const getPaginationGroup = () => {
    let start = Math.floor((page - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, index) => start + index + 1);
};
  return (
    <div className="buttons">
      <button id="prev" onClick={prevPage} disabled={page === 1}>
        <img src={left} alt="PreviousIcon" />
      </button>
      {getPaginationGroup().map((ele, active) => {
        return (
          <button
            className="button-num"
            key={active}
            id={page === ele ? "active" : ""}
            onClick={() => goToCurrentPage(ele)}
          >
            {ele}
          </button>
        );
      })}
      <button id="next" onClick={nextPage} disabled={page === 100}>
        <img src={right} alt="NextIcon" />
      </button>
    </div>
  );
};
export default CPagination;
