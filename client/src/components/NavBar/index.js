import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import BuildIcon from '@material-ui/icons/Build';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color='secondary'>
                <Toolbar>
                    <BuildIcon edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </BuildIcon>
                    <Button color="inherit" href="/about">About</Button>
                    <Button color="inherit" href="/search">Search</Button>
                    <Button color="inherit" href="/post">Post</Button>
                    <Button color="inherit" href="/">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
