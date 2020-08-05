import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from "./robots";
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class  App extends Component{
    constructor(){
        super();
        this.state = {
            robots :  robots,
            searchfiels : ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfiels: event.target.value});
    }
    render(){
        const filteredrobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfiels.toLocaleLowerCase());
        })
        console.log(filteredrobots);
        return (
            
    <div className = 'tc'>
        <h1> RoboFriends </h1>
        <SearchBox searchChange  = {this.onSearchChange}/>
        <Scroll>
        <CardList robots = {filteredrobots}/>
        </Scroll>
    </div>
    );
    }   
}

export default App;
