import React, { Component } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { Redirect } from 'react-router'

/* const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    button: {
        margin: theme.spacing(1),
    },
})); */


export default class PostPage extends Component {
    state = {
        name: '',
        category: '',
        price: '',
        picture: 'https://house.utah.gov/wp-content/uploads/2019/01/Image-Coming-Soon.jpg',
        owners: 'This is Your Tool!',
        redirect: false,
        toolID: null

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const newTool = this.state

        axios.post(`api/tools`, { newTool })
            .then(res => {
                console.log("Tool Saved Successfully!");
                this.setState({ name: '', category: '', price: '' })
                this.setState({ redirect: true })
            })
            .catch(err => console.log(err))

    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={'/search'} />;
        }
        return (
            // <div>
            //     <p>
            //         This is just a Test
            //     </p>
            // </div>
            <form style={{
                margin: 'theme.spacing(1)',
                width: '200'
            }} noValidate autoComplete="off" onSubmit={this.onSubmit}>
                <div>
                    <TextField
                        type='text'
                        label="Category"
                        name="category"
                        id="outlined-size-normal"
                        defaultValue="Tool Category"
                        variant="outlined"
                        value={this.state.category}
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <TextField
                        type='text'
                        label="Name"
                        name="name"
                        value={this.state.name}
                        id="outlined-size-normal"
                        defaultValue="Tool Name"
                        variant="outlined"
                        onChange={this.onChange}

                    />
                </div>
                <div>
                    <TextField
                        type='text'
                        label="Price"
                        name="price"
                        value={this.state.price}
                        id="outlined-size-normal"
                        defaultValue="Rent Price"
                        variant="outlined"
                        onChange={this.onChange}

                    />
                </div>
                {/*  <label htmlFor="upload-photo">
                <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                />

                <Fab
                    color="dark"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                >
                    <AddIcon /> Upload photo
                </Fab>
            </label>
            <div>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}>
                    Upload
                </Button>
            </div> */}
                <input type='submit' value='Submit' />
            </form>
        );
    }

}
