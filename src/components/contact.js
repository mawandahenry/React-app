import React, { Component } from 'react';
import {connect} from 'react-redux';
import {delete_users,edit_users} from '../actions/';
import Proptypes from 'prop-types';
import final from '../images/final.gif';
import { withRouter } from "react-router-dom";
import logo from '../images/final.gif';



class Contact extends Component {

  constructor(props) {
     super(props);
     this.state = {
       is_toggled: false
     }
  }
toggler = () => {
  this.setState({
    is_toggled: !this.state.is_toggled
  })
}

  ting =(id) => {
    this.props.edit_users(id).
    then( () => this.props.history.push('/form'))


  }
  deleter =(id)=> {
    this.props.delete_users(id)
  }
  render() {

    return (

<div className = "card">
<div className = "card-header">
<h3 className="text-center text-danger">Contact List</h3>
</div>
<div className = "card-body">

{this.props.x? this.props.x.map(y => {
  return(
    <React.Fragment>
    <ul className="list-group" >
    <li className="list-group-item">{y.name}<span className="fa fa-caret-down" onClick = {this.toggler.bind(this)}>
    </span><span className="fa fa-pencil" style = {{float: 'right', fontSize: '25px'}} onClick = {this.ting.bind(this,y.id)}></span>
    <span className="fa fa-trash" style = {{float: 'right', fontSize: '30px', color: 'red'}} onClick = {this.deleter.bind(this,y.id)}></span></li>
  {this.state.is_toggled?(
    <React.Fragment>
    <li className="list-group-item">{y.email}</li>
    <li className="list-group-item">{y.phone}</li>
    </React.Fragment>
  ):null}
    </ul>
    </React.Fragment>
  )
}):
<img className="img-thum" src={logo} alt="Loading........" />}

</div>
</div>
)
}
}
const mapStateToProps =(state)=> ({
  x: state.users.state_0
})


export default connect(mapStateToProps,{delete_users,edit_users})(Contact);
