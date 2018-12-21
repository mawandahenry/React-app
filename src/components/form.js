import React, {Component} from 'react';
import {connect} from 'react-redux';
import {update_users} from '../actions/';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      phone: ''
    }
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.form1 = React.createRef();
  }
  // componentDidMount(){
  //   const {id, name,email,phone} = this.props.port;
  //   this.setState({
  //     name,
  //     email,
  //     phone,
  //     id
  //   })
  // }


  handle = (x) => {
    x.preventDefault();
    this.setState({
      id: this.props.port.id,
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    })
    console.log(this.state);
  //this.props.update_users(this.state).then(() => this.form1.reset);
  //this.props.history.push("/");
  }
  render() {
    const {id, name,email,phone} = this.props.port;
    return(
      <div className = "container">
      <h3 className="display-5">Registration Form</h3>
<form onSubmit = {this.handle.bind(this)} ref = {this.form1}>

<div className = "form-group">
<label forhtml="names">Names</label>
<input className="form-control" type="text" name="name" defaultValue={name}  ref = {this.nameInput} required />
</div>
<div className = "form-group">
<label forhtml="email">Email</label>
<input className="form-control" type="email" name="email" defaultValue={email} ref = {this.emailInput} required/>
</div>

<div className = "form-group">
<label forhtml="contact">Contact</label>
<input className="form-control" type="text" name="phone" defaultValue={phone} ref = {this.phoneInput} required />
</div>
<div className = "form-group">
<input className="btn btn-success btn-block" type="submit" name="save" value="add user" />
</div>


</form>

      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    port: state.users.portion
  }
}
export default connect(mapStateToProps,{update_users})(Form);
