import React from "react";
//REMINDER: Change variable names for prop data!!
function SearchResultsList(props){
    return(
        <ul className="employee-list">
            {props.results.map(result =>(
                <div className ="row"  key = {result.id.value}>
                    <div className = "col-md">
                    <img className = "img-fluid" src={result.picture.medium} alt ="Employee Portrait"></img>
                    </div>
                    <div className = "col-md">
                    <p>Name: {result.name.title}. {result.name.first} {result.name.last}</p>
                    </div>
                    <div className = "col-md">
                    <p>Phone: {result.phone}</p>
                    </div>
                    <div className = "col-md">
                    <p>Email : {result.email}</p>
                    </div>
                </div>
            ))}
        </ul>
    );
}

export default SearchResultsList;