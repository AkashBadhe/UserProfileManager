import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default class profiledetail extends Component{
    render(){
         let { id } = useParams();
        return(<div> <Button className="btn-profile">Back to Home</Button>
       <h3>ID: {id}</h3>
        
        </div>)
    }
}