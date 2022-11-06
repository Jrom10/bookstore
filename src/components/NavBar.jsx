import {Link} from "react-router-dom"
import React from "react";

function NavBar() {
    return (  
        <div>
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
        </div>
    );
}

export default NavBar;