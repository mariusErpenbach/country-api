import React from "react";

const Country = ({ results }) => {
  const lands = results.map((obj, i) => {
    console.log(obj);
    const { name, flag, capital, } = obj;
    return (
      <div key={i}>
        <h2>{name}</h2>
        <h5>Capital: {capital}</h5>
        
        <img src={flag} alt={name} className="flag" />
      </div>
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;
