import React, { Component } from 'react';
import axios from 'axios';
import { Consumer} from '../../globalContext';



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

    // BRINGS ALL RESULTS FROM API THEN FILTER
/*     searchTools = (e) => {
        e.preventDefault();
        axios.get(`/api/tools`)
        .then(res => {
            console.log(res);
           let results = res.data.filter(
               (tool) => {
                   return tool.category.indexOf(this.state.searchTerms) !== -1
               }
           ) 
        this.setState({tool_list: results})
        console.log(results);
        }) 
        .catch(err => console.log(err))
    } */

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
                            <p> Enter Category of Tool </p>

                            <form onSubmit={this.searchTools.bind(this, dispatch)}>
                                <input 
                                type="text" 
                                placeholder="Category Name..."
                                name="searchTerms"
                                value={this.state.searchTerms}
                                onChange={this.onChange}
                                ></input>
                                <button type='submit' style={{padding: "10px"}}>Get Tools!</button>
                            </form>
                        </div>
                    );

                }}
            </Consumer>
        )
    }
}

export default SearchBar
