import React from 'react';

export default class TitleBar extends React.Component {
  constructor(props) {
    super(props);

    this.title = this.props.title;
  }


  render() {
    return (
        <div>
          <h1>{this.title}</h1>
        </div>
    )
  }
}
