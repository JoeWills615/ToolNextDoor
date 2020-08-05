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



class ToolView extends Component {

  state = {
    tool: {},
    owner: {}
  }

  url = (window.location.pathname.replace("/tools/", ""))

  componentDidMount() {
    axios
      .get(`/api/tools/${this.url}`)
      .then(res => {
        console.log(res.data)
        this.setState({ tool: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { name, category, owners, picture, price } = this.state.tool
    console.log(this.state.tool);
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.state.tool.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <img src={picture} alt={name} style={{ maxWidth: "400px" }} />
              <br />
            Price: ${price} per day || ${price * 4.5} per week
            <br />
            Category: {category}
              <br />
            Owned By: {owners}
              <br />

            </Typography>z
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Rent
        </Button>
          <Button size="small" color="primary">
            <Link href={`/owners/${owners}`}> View All Tools by This Owner </Link>
          </Button>
        </CardActions>
      </Card>
    )



  }


}

export default ToolView
