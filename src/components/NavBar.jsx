import {Link} from "react-router-dom"
import React from "react";
import Button from "@mui/material/Button";

function NavBar() {
    return (  
        <div className="topnav" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
            <Button variant="outlined">
                <Link to="/" style={{textDecoration:"none"}}>Home</Link>
            </Button>
            <Button variant="outlined">
                <Link to="/create" style={{textDecoration:"none"}}>Create</Link>
            </Button>
        </div>
    );
}

export default NavBar;