import React from "react";

function SearchForm(props){
    return(
        <form classNAme = 'search-form'>
            <div className = "search-div">
                <label htmlFor="search-form">Search by Name:</label>
                <input id ="search-form" name = "userInput" value = {props.state.userInput} type = "text" onChange={props.nameSearchInputChange}></input>
                <button className ="btn btn-primary search-button" onClick = {props.nameSearchSubmit}>Search</button>
            </div>
            <div className = "sort-div">
                <label htmlFor = "sort-button">Sort by First Name:</label>
                <button onClick = {props.alphaSort} id = "sort-button" className = "btn btn-warning">A-Z</button>
            </div>
        </form>
    );
};

export default SearchForm;