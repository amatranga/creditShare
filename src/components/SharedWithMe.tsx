import React from 'react';
import Credentials from './Credentials';

export default class SharedWithMe extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      SharedWithMe: [this.props.SharedWithMe]
    }
  }

  componentWillMount() {
    console.log(this.props, 'props in SharedWithMe');
  }
  render() {
    return (
      <span className="col">
        <h3>Shared With Me</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Website</th>
              <th>UserName</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sharedWithMe[0].map((credential:any, idx:any) =>
              <Credentials
                key={idx}
                id={idx}
                credential={credential} />
            )}  
          </tbody>
        </table>
      </span>
    );
  }
}
