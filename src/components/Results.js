import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map(pet => (
          <Pet
            animal={pet.type}
            breed={pet.breeds.primary}
            media={pet.photos}
            name={pet.name}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            key={pet.id}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
