import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from '@material-ui/icons/Search';
import Recipes from './giRecipes'



const App= () => {

  const APP_ID = "db953df5";
  const APP_KEY = "46ead17b91ac0f940ea6a4ec77f964f9";


  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState("")
  const[query, setQuery] = useState('chiken')


  useEffect(() => {
    getRecipes();

  },[query])

  const getRecipes = async () => {
    const respons = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const finelData = await respons.json();

    setRecipes(finelData.hits);
    console.log(finelData.hits)
  }

  const updateSearch = e  => {
    e.preventDefault();
    setSearch(e.target.value)

  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="app">

      <form className="search-form" onSubmit={getSearch}>
      
        <input 
           className="search-bar"
           type="text" 
           placeholder="Search what you like foods...?" 
           value={search}
           onChange={updateSearch}
           
        />
        
        
        <button className="search-button" type="submit" > <SearchIcon className="icon" /> </button>
    
      </form>
      <div className="container-items">
          {recipes.map(recipe => (
            <Recipes 
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              img={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
        ))}
      </div>
    </div>
  )
}

export default App

