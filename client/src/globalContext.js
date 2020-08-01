import React, { Component } from 'react'
import axios from 'axios';

//Makes info available everywhere in the app
const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_TOOLS': 
        return{
            ...state,
            tool_list: action.payload,
            header: "Search Results"
        };
        default: 
        return state;
    }
}

export class Provider extends Component {
    state = {
        tool_list: [],
        owner_list: [],
        header: "All Tools",
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        axios.get('/api/tools')
            .then(res => {
                console.log(res.data)
            this.setState({tool_list: res.data})
            }) 
            .catch(err => console.log(err))
         axios.get('/api/owners')
            .then(res => {
                console.log(res.data)
            this.setState({owner_list: res.data})
            }) 
            .catch(err => console.log(err)) 
    }



    render() {
        return (
            // passing state as value to access anywhere you bring this in
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;