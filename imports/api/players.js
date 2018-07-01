import {Mongo} from 'meteor/mongo';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
  let rank = 1;
  let place_str = ['st', 'nd', 'rd', 'th'];

  return players.map((player, index) => {
    if (index !== 0 && players[index - 1].score > player.score) {
      rank++;
    }

    if (rank - 1 < place_str.length) {
      current_place = `${rank}${place_str[rank - 1]}`;
    }
    else
    {
      current_place = `${rank}${place_str[3]}`;
    }

    return {...player, rank, place: current_place};
  });
};