import React, { useEffect, useState } from "react";

function Traditional() {
  const [traditional, setTraditional] = useState([]);

  useEffect(() => {
    getTraditional();
  }, []);

  const getTraditional = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
    setTraditional(data.recipes);
  };

  return (
    <div>
      {traditional.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Traditional;
