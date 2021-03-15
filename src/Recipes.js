import React from 'react'
import style from './recipes.module.css'

function Recipes({title,calories,img,ingredients}) {
    return (
        <div className={style.recipes}>

            <h2>{title}</h2>
             
                <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
               </ol>
            <h2>Calories</h2>
            <p>{calories}</p>
            <div className= {style.images}>
              <img  src={img} alt="" />
            </div>
        </div>
    )
}

export default Recipes
