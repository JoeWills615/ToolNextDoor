


// Fan Favorite
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
                    {/* <Typography variant="h6" className={classes.title}>
                        Tool Next Door
                    </Typography> */}
                    {/* <Typography className={classes.root}>
                    </Typography>
                    <Typography variant="h6" className={classes.title} href="/about">
                        About
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Search
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Post
                    </Typography> */}
                    <Button color="inherit" href="/about">About</Button>
                    <Button color="inherit" href="/search">Search</Button>
                    <Button color="inherit" href="/post">Post</Button>
                    <Button color="inherit" href="/">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}


// Old navbar
// import React from "react";



// function NavBar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <p className="navbar-brand">Tool Next Door</p>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                     <li className="nav-item">
//                         <a className="nav-link" href="/about">About</a>
//                     </li>
//                     <li className="nav-item active">
//                         <a className="nav-link" href="/Search">Search</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="/post">Post</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="/">Login</a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>)
// }

// export default NavBar;