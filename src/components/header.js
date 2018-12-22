import React from 'react';
import {Link} from 'react-router-dom';

const Header =() => {
  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <Link className="navbar-brand" to="/">Admin</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/add">AddUser <span className="sr-only fa fa-plus">(current)</span></Link>
          </li>

        </ul>

      </div>
    </nav>
    </React.Fragment>
  )
}
export default Header;
