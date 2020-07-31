import React, { Component } from 'react'
import axios from 'axios';

//Makes info available everywhere in the app
const Context = React.createContext()

export class Provider extends Component {
    state = {
        tool_list: [],
        owner_list: [
            {
                picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpNDJ77ph_wehgVKCf7rWUoEPkUwhvweKqlQ&usqp=CAU",
                tools: [],
                _id: "5f248fb244eb9525287434a9",
                firstName: "Randy",
                lastName: "Taylor"
                }
        ],
        header: "All Tools"
    }

    componentDidMount() {
        axios.get('/api/tools')
            .then(res => {
                console.log(res.data)
            this.setState({tool_list: res.data})
            }) 
            .catch(err => console.log(err))
        /* axios.get('/api/tools')
            .then(res => {
                console.log(res.data)
            this.setState({tool_list: res.data})
            }) 
            .catch(err => console.log(err)) */
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