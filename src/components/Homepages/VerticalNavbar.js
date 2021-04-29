import React from 'react';
import {Link} from 'react-router-dom';


function VerticalNavbar(){
    return(
        <div>
            <nav class="navbar navbar-light bg-primary ">
            <Link className="navbar-brand" to="/"><i className="fas fa-home" style={{ color: "white" }}></i></Link>
            
            </nav>
        </div>
    )
}

export default VerticalNavbar;