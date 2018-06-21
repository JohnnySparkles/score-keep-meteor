import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types'

export default class Player extends React.Component {
  render() {
    return (<p key={this.props.player._id}>
      {this.props.player.name} has {this.props.player.score} point(s).
      <button onClick={() => {
        Players.remove({_id: this.props.player._id});
      }}>X</button>
      <button onClick={() => {
        Players.update({_id: this.props.player._id}, {$inc: {score: 1}});
      }}>+1
      </button>
      <button onClick={() => {
        Players.update({_id: this.props.player._id}, {$inc: {score: -1}});
      }}>-1
      </button>
    </p>);
  }
}

Player.PropTypes = {
  player: PropTypes.object.isRequired
};
