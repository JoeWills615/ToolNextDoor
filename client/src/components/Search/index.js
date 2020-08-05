import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import SearchBar from '../SearchBar/SearchBar';
import {Consumer} from '../../globalContext'



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

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
   <Consumer>
       {value => {

     return( 
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Tool Next Door
            <SearchBar></SearchBar>
            </Typography>
          </Container>
        </div>
        <h1 style={{textAlign: "center"}}>{value.header}</h1>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {value.tool_list.map((tool) => (
              <Grid item key={tool} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={tool.picture}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {tool.name}
                    </Typography>
                    <Typography>
                      Price: ${tool.price} per day || {tool.price * 4.5} per week
                     <br/>
                      Category: {tool.category}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary">
                     <Link color='secondary' href={`/tools/${tool._id}`}> View Info </Link> 
                    </Button>

                    <Button size="small" color="primary">
                       <Link href={`/cart/${tool.price}`}>Rent This Tool! </Link> 
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Tool Next Door
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          The TOOLution to your equipment needs!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>  
    ) 
    }}
     </Consumer> 
  );
}