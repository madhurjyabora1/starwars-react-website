import React from "react";

const Character = ({ info }) => {
  return (
    <div>
      {
        <ul>
          <li>
            <h2>{info.name}</h2>
          </li>
          <li>
            <h2>Gender: {info.gender}</h2>
          </li>
          <li>
            <h2>Birth Year: {info.birth_year}</h2>
          </li>
          <li>
            <h2>Hair Color: {info.hair_color}</h2>
          </li>
          {info.vehicles.length > 0 && (
            <li>
              <h2>Vehicles:</h2>
              <ul>
                {info.vehicles.map((vehicle, index) => (
                  <li key={index}>{vehicle}</li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      }
    </div>
  );
};

export default Character;
