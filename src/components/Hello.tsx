import * as React from 'react';

export interface Props {
  language: string,
  framework: string
}

// function Hello({ language, framework }: Props) {
//   return (
//     <div>
//       <h2>Hello from {language} and {framework}</h2>
//     </div>
//   );
// }



export default class Hello extends React.Component<Props, {}> {
  render() {
    const { language, framework } = this.props;
    return (
      <div>
        <h2>Hello from {language} and {framework}</h2>
      </div>
    );
  }
}

// export default Hello;
