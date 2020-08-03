import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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
}));


export default function PostPage() {
    const classes = useStyles();
    return (
        // <div>
        //     <p>
        //         This is just a Test
        //     </p>
        // </div>
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    label="Category"
                    id="outlined-size-normal"
                    defaultValue="Tool Category"
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    label="Name"
                    id="outlined-size-normal"
                    defaultValue="Tool Name"
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    label="Price"
                    id="outlined-size-normal"
                    defaultValue="Rent Price"
                    variant="outlined"
                />
            </div>
            <label htmlFor="upload-photo">
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
            </div>
            
        </form>
    );
}
