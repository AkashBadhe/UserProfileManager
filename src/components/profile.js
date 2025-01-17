import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Mystyle from "../mystyle.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import {CardMedia, CardContent } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import services from '../srvices';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default class Profile extends Component {
  state = {
    filter: "",
    data: []
  };

  componentDidMount(){
    let data = services.getUsers();
    this.setState({
      data: data
    })
  }

  handleChange = event => {
    this.setState({ filter: event.target.value });
  };
  render() {
    const { filter, data } = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = data.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

    return (



      <div>
          
        <AppBar position="static">
          <Toolbar variant="dense" className="Pro_nav">
            <Typography variant="h6">UX/UI Profession</Typography>
          </Toolbar>
        </AppBar>

        <div className="Wrapper_main">
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                id="input-with-icon-grid"
                label="Search"
                value={filter}
                onChange={this.handleChange}
                className="search-box"
              />
            </Grid>

            {filteredData.map(item => (
              <Grid item md={3} xs={12}>
                <Card key={item.id} className="card_hover">
                  <CardActionArea>
                    <CardMedia
                      style={{ backgroundImage: `url(${item.src}) ` }}
                      className="Avatar"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.fname}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.Designation}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.email}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    {/* <Button className="btn-profile" >Learn More</Button> */}
                    <Link to={`/profileDetails/`+ item.id} className="btn-profile">Learn More</Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

