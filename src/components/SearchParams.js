import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, updateLocation] = useState("Seatle, WA");
  const [animal, updateAnimal] = useState("dog");
  const [breed, updateBreed] = useState("");
  const [breeds, updateBreeds] = useState([]);

  useEffect(() => {
    updateBreeds([]);
    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      updateBreeds(breedString);
    }, console.error);
  }, [animal]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location :
          <input
            id="location"
            type="text"
            value={location}
            onChange={e => updateLocation(e.target.value)}
            placeholder="location..."
          />
        </label>
        <label htmlFor="animal">
          Animal :
          <select
            id="animal"
            value={animal}
            onChange={e => updateAnimal(e.target.value)}
            onBlur={e => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed :
          <select
            id="breed"
            value={breed}
            onChange={e => updateBreed(e.target.value)}
            onBlur={e => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map((name, index) => (
              <option key={index} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
