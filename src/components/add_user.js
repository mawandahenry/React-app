import React, { Component } from 'react'
import {connect} from 'react-redux';
import {add_users} from '../actions/';
import short from 'shortid';


class RegForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      id: ''
    }
  }

  clicker =(e)=> {
    this.setState({[e.target.name]: e.target.value,id: short()});
  }
  handle = (x) => {
    x.preventDefault();
    this.props.add_users(this.state);
    this.setState({
      name: '',
      email: '',
      phone: ''
    })
    this.props.history.push("/");
  }
  render() {
    const {id, name,email,phone} = this.state;
    return(
      <div className = "container">
      <h3 className="display-5">Registration Form</h3>
<form onSubmit = {this.handle.bind(this)}>

<div className = "form-group">
<label forhtml="names">Names</label>
<input className="form-control" type="text" name="name" value={name} onChange = {this.clicker} required />
</div>
<div className = "form-group">
<label forhtml="email">Email</label>
<input className="form-control" type="email" name="email" value={email} onChange = {this.clicker} required/>
</div>

<div className = "form-group">
<label forhtml="contact">Contact</label>
<input className="form-control" type="text" name="phone" value={phone} onChange = {this.clicker} required />
</div>
<div className = "form-group">
<input className="btn btn-success btn-block" type="submit" name="save" value="add user" />
</div>


</form>

      </div>
    )
  }
}
export default connect(null, {add_users})(RegForm);
