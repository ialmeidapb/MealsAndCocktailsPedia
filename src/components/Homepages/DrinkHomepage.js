import React from "react";
import { Link } from "react-router-dom";

import NonAlcoholic from "../../assets/images/nonalcoholic.jpg"
import Alcoholic from "../../assets/images/alcoholic.jpg"

function DrinkHomepage(){

    return (
<div>
<h1>Cocktails</h1>

<div className="d-flex justify-content-around flex-wrap">


<div class="card bg-dark text-white w-50 m-3">
<Link to={`/drinks/Alcoholic`}>
<img src={Alcoholic} class="card-img" alt="lamb"/>
<div class="card-img-overlay">
<h5 class="card-title">Alcoholic Cocktails Recipes</h5>

</div>
</Link>
</div>


<div class="card bg-dark text-white w-50 m-3">
<Link to={`/drinks/Non_Alcoholic`}>
<img src={NonAlcoholic} class="card-img" alt="lamb"/>
<div class="card-img-overlay">
<h5 class="card-title">Non-Alcoholic Cocktails Recipes</h5>

</div>
</Link>
</div>



</div>

        </div>
    )
}



export default DrinkHomepage;