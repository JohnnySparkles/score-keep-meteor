import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import './main.html';
import App from './../imports/ui/App';

Meteor.startup(() => {

  Tracker.autorun(() => {
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let title = 'Score Keep';
    let name = 'John Wieland';
    ReactDOM.render(<App title={title} players={positionedPlayers}/>, document.getElementById('app'));
  });
});


