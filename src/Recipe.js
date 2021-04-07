import React from 'react';
import style from './recipe.module.css'


const Recipe = ({title,  image, ingredients}) => {

    return(






<div>

        <div className={ style.recipe}>
<h1> {title}</h1>

<ol>
        { ingredients.map(ingredients => (
                <li>
                    { ingredients.text }
                    </li>


        ))}

    
</ol>

{/* <h1>{calories}</h1> */}


     
<img className={style.image} src = {image} alt = ""/>

        


</div>
</div>


        
    );
}

export default Recipe