import * as React from 'react';

const Credentials = (props:any) => {
  if (props.onDelete) {
    return (
      <tr>
        <td>
          {props.credential.website}
        </td>
        <td>
          {props.credential.username}
        </td>
        <td>
          {props.credential.password_id}
        </td>
        <td>
          <button id={props.id} className="btn btn-primary" onClick={props.onShare ? props.onShare : null}>Share</button>
        </td>
        <td>
          <button id={props.id} className="btn btn-danger" onClick={props.onDelete}>Delete</button>
        </td>
      </tr>
    );
  } else {
    console.log(props, 'current props');
    return (
      <tr>
        <td>
          {props.credential.website}
        </td>
        <td>
          {props.credential.username}
        </td>
        <td>
          {props.credential.password_id}
        </td>
      </tr>
    );
  }
}

export default Credentials;
