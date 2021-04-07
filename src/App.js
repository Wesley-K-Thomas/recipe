import React, { useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = "70ffd0e9";
  const APP_KEY = "64f3c43b9d31064ad019c287b5cf8821";

//every thing is stored here from the api in the recipes.
  const [recipes, setRecipes] = useState ([]);

  const [search, setSearch] =useState ("");

  const [query, setQuery] =useState ('chicken'); 
  
  useEffect(   () => {

    getRecipies();

  }, [query]);


const getRecipies = async () => {
  const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
 
  const data = await response.json();
  setRecipes(data.hits);
};
  
const updateSearch = e => {

  setSearch(e.target.value)
  

};

const getSearch = e =>{
e.preventDefault();
setQuery(search);
setSearch("");

};
  
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="search-button" type = "submit">Search</button>

      </form>

      <div className="recipies">
{recipes.map(recipe =>(

<Recipe 

key ={recipe.recipe.label}
title={recipe.recipe.label} calories={recipe.recipe.calories}

image={recipe.recipe.image}
ingredients={recipe.recipe.ingredients}


/>



))};
</div>
    </div>
  );
  };




export default App;
