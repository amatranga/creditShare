import * as React from 'react';

const Navbar = (props:any) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Share Credentials</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <span className="navbar-text">{props.name}</span>
          </li>
          <li className="nav-item">
            <span className="navbar-text">
              {props.userName}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
