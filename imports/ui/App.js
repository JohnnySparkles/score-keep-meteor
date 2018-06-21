import React from 'react';
import TitleBar from './../ui/TitleBar';
import AddPlayer from './../ui/AddPlayer';
import PlayerList from './../ui/PlayerList';


export default class App extends React.Component {
  render() {
    return (
        <div>
          <TitleBar title={this.props.title} />
          <PlayerList players={this.props.players} />
          <AddPlayer/>
        </div>
    );
  };
}
