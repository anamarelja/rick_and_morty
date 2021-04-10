import React from "react";
import "./SinglePage.scss";

const SinglePage = (props) => {
  return (
    <div className="SinglePage">
      <span>{props.results.name}</span>
      <img src={props.results.image} alt="profile_pic" />
      <span>Gender : {props.results.gender}</span>
      <span>Date of Birth : {props.results.created.slice(0, 10)}</span>
      <span>Location : {props.results.location.name}</span>
      <span>Species : {props.results.species}</span>
      <span>Status : {props.results.status}</span>
    </div>
  );
};

export default SinglePage;
