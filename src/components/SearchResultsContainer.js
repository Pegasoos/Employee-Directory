import React, { Component } from "react";
import SearchForm from "./SearchForm.js";
import SearchResultsList from "./SearchResultsList";
import API from "../utils/API";
import NavBar from "./NavBar.js";

class SearchResultsContainer extends Component{
    state = {
        results: [],
        userInput: ""
    }
    search = () =>{
        API.search()
        .then(res => res.json())
        .then(res => this.setState({results: res.results}))
        .catch(err => console.log(err))
      }
    alphaSort = e =>{
    //set state to sorted array
        e.preventDefault();
        this.setState({results:this.state.results.sort((a,b) => (a.name.first.localeCompare(b.name.first)))})
    };
    //updates userInput in state on changes to search input
    nameSearchInputChange = e =>{
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({[name]:value})
    }
    //filters results array based on user input, thus updating rendered employees 
    nameSearchSubmit = e =>{
        e.preventDefault();
        this.setState({results:this.state.results.filter(x => {return x.name.first.toUpperCase().includes(this.state.userInput.toUpperCase())})}) 
        console.log(this.state.results)
    }
    render(){
        return(
            <div>
               <NavBar search = {this.search}/>
               <SearchForm  state = {this.state} alphaSort = {this.alphaSort} nameSearchInputChange = {this.nameSearchInputChange} nameSearchSubmit = {this.nameSearchSubmit}/>
               <SearchResultsList results = {this.state.results}/>
            </div>
            )
    }
}

export default SearchResultsContainer;