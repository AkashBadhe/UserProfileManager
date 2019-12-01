import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import services from '../srvices';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default class profiledetail extends Component{
  constructor(){
    super();
    this.state = {
      user: {}
    }
  }
  componentDidMount(){
    let user = services.getUserById(this.props.match.params.id);
    this.setState({
      user: user
    });
  }
    render(){
      const {user} = this.state;
      return <h1>{user.fname}</h1>
    }
}