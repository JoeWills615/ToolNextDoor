import React, { Component } from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

 const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    button: {
        margin: theme.spacing(1),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Chris/Alex/Lex/Joe
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


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
            <div>
            <form style={{
                margin: 'theme.spacing(1)',
                width: '200',
                align: 'center'
            }} noValidate autoComplete="off" onSubmit={this.onSubmit}>
                <div align='center'>
                    <Typography>
                    <h1>Tool Next Door</h1>
                    <h3>Rent your collection of tools to earn extra cash</h3>
                    <h3>Place Specialty tools you rarely use back to work!</h3>
                    </Typography>
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
                <div align='center'>
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
                <div align='center'>
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
                <div align='center'>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<CloudUploadIcon />}
                    >
                    Upload
                </Button>
                </div>

            </form>
            </div>
        );
    }

}
