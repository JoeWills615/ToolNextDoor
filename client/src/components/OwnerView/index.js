import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import { Consumer } from '../../globalContext'
import Link from '@material-ui/core/Link';



class OwnerView extends Component {

  state = { owner: {} }

  url = (window.location.pathname.replace("/owners/", ""))

  componentDidMount() {
    axios
      .get(`/api/owners/${this.url}`)
      .then(res => {
        this.setState({ owner: res.data[0] })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { fullName, picture, tools } = this.state.owner
    console.log(picture);
    if (!picture) {
      return <h1>Loading...</h1>
    }
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.owner.fullName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <img src={picture} alt={fullName} style={{ maxWidth: "400px" }} />
              <br />
            {tools.map(tool => {
             return <h1>{tool}</h1>
            }
            )}

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default OwnerView
