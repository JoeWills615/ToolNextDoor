import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../globalContext';
import Button from '@material-ui/core/Button';


class SearchBar extends Component {
    state = {
        searchTerms: ''
    }
    
    onChange = (e) => {
        const {value, name} = e.target
        this.setState({ [name]: value});
    }

  //Searches DB by params in tools controller, seperate from findByID
     searchTools = (dispatch, e) => {
        e.preventDefault();
        const search = this.state.searchTerms.charAt(0).toUpperCase() + this.state.searchTerms.slice(1)
        console.log(search);
        axios.get(`/search/${search}`)
        .then(res => {
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
                        // Can be changed to navbar category search to ensure results?
                        <div>
                            

                            <h1> Search for Tools! </h1>
                            {/* <p> Enter Category of Tool </p> */}

                            <form onSubmit={this.searchTools.bind(this, dispatch)}>
                                <input 
                                type="text" 
                                placeholder="Category Name..."
                                name="searchTerms"
                                value={this.state.searchTerms}
                                onChange={this.onChange}
                                size='sm'
                                style={{maxHeight: '50%', fontSize: '30px', marginWidth: '80%'}}
                                >
                                
                                </input>
                                <br />
                                <Button type='submit' variant="contained" color="secondary">
                                    Get Tools
                                </Button>
                                {/* <button type='submit' style={{padding: "10px"}}>Get Tools!</button> */}
                            </form>
                        </div>
                    );

                }}
            </Consumer>
        )
    }
}

export default SearchBar
