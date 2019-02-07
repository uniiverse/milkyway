import React, { Component } from 'react';
import './App.css';

import { Button, Container } from 'semantic-ui-react';

import 'milkyway/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid >
          <Button primary>Hello semantic!</Button>
        </Container>
      </div>
    );
  }
}

export default App;
