import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../globalContext';



class CategoryBar extends Component {
    state = {
        searchTerms: ''
    }

    onChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value });
    }

    //Searches DB by params in tools controller, seperate from findByID
    searchTools = (dispatch, e) => {
        e.preventDefault();

        axios.get(`/search/${this.state.searchTerms}`)
            .then(res => {
                console.log(res);
                dispatch({
                    type: 'SEARCH_TOOLS',
                    payload: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <Consumer>
                {value => {
                    //Bring in dispatch to bind to function to change our search results and heading
                    const { dispatch } = value;
                    return (
                        <div>


                            // Can be changed to navbar category search to ensure results?
                            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                                <p className="navbar-brand">Tool Next Door</p>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse" id="navbarSupportedContent">
                                    <form /* onSubmit={this.searchTools.bind(this, dispatch)} */>
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                            <button className="nav-link">Automotive</button>
                                            </li>
                                            <li className="nav-item">
                                            <button className="nav-link">About</button>
                                                
                                            </li>
                                            <li className="nav-item">
                                                <button className="nav-link">About</button>
                                            </li>
                                            <li className="nav-item">
                                            <button className="nav-link">About</button>
                                                
                                            </li>
                                        </ul>
                                    </form>

                                </div>
                            </nav>
                            <div>
                                <h1> Search for Tools! </h1>
                                <p> Enter Category of Tool </p>

                                <form onSubmit={this.searchTools.bind(this, dispatch)}>
                                    <input
                                        type="button"
                                        placeholder="Category Name..."
                                        name="searchTerms"
                                        value='Automotive'
                                        onChange={this.onChange}
                                    ></input>
                                    <button type='submit' style={{ padding: "10px" }}>Get Tools!</button>
                                </form>
                            </div>
                    
                        </div>);
                }}
            </Consumer>
        )
    }
}

export default CategoryBar
