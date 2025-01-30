import React from "react";

const heading = ({title, subtitle}) => {
  return (
    <>
      <div className="heading">
        <h2 class = "title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
    </>
  );
};

export default heading;
