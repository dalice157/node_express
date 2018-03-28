import './css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
      </div>);
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);