import React from 'react';
import TitleBar from './../ui/TitleBar';
import AddPlayer from './../ui/AddPlayer';
import PlayerList from './../ui/PlayerList';
import PropTypes from 'prop-types';


export default class App extends React.Component {
  render() {
    return (
        <div>
          <TitleBar title={this.props.title} subTitle={"Created by John Wieland"}/>
          <div className={"wrapper"}>
            <PlayerList players={this.props.players} />
            <AddPlayer/>
          </div>
        </div>
    );
  };
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}

