import * as React from 'react';
import Credentials from './Credentials';

export default class SharedWithOthers extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      sharedWithOthers: [this.props.sharedWithOthers]
    }
  }
  render() {
    return (
      <span className="col">
        <h3>Shared With Others</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Website</th>
              <th>UserName</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sharedWithOthers[0].map((credential:any, idx:any) =>
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
