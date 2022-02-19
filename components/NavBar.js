import React from "react";

function NavBar(props){
    return (
        <nav className ="navbar navbar-light">
            <a href ="/">Home</a>
            <div>
            <button onClick = {props.search} className = "btn btn-success">Generate People</button>
            </div>
        </nav>
    );
};

export default NavBar;