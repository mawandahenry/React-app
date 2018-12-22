import React, { Component } from 'react';
import Header from './header';
import {connect} from 'react-redux';
import {fetch_users,delete_users,edit_users} from '../actions/';
import Proptypes from 'prop-types';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Form from './form';
import Contact from './contact';
import RegForm from './add_user';



class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        edited: true
      }
  }
  componentWillMount(){
    this.props.fetch_users();
  }
panga = () => {
  this.setState({
    edited: !this.state.edited
  })
}
  render() {

    return (
      <Router>
      <div className="App">
       <Header />
       <Switch>
       <Route exact path = "/" component = {Contact} />
       <Route exact path = "/form" component = {Form} />
       <Route exact path = "/add" component = {RegForm} />
       </Switch>

      </div>
      </Router>
    );
  }
}
const mapStateToProps =(state)=> ({

    us: state.users.state_0

})

export default connect(mapStateToProps, {fetch_users})(App);
