import React from 'react';

class App extends React.Component {
  constructor(name) {
    this.name = name;
  }

  render() {
    return (
      <TitleBar />
    );
  };
}
