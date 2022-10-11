import React, { Component } from 'react';
import styles from './PostGameScreen.module.css'

class PostGameScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {

      scoreboard: {
        blueTeamImageUrl: '',
        redTeamImageUrl: '',
        blueScore: 3,
        redScore: 2,
        bluePossession: 250,
        redPossession: 180,

        players: [
          {
            name: 'smushball',
            goals: 0,
            assists: 2,
            saves: 1,
            shots: 3,
            demos: 3,
            totalBoost: 2136
          }, {
            name: 'emilvald',
            goals: 2,
            assists: 1,
            saves: 3,
            shots: 5,
            demos: 1,
            totalBoost: 2650
          }, {
            name: 'paxole',
            goals: 1,
            assists: 0,
            saves: 1,
            shots: 2,
            demos: 1,
            totalBoost: 2230
          }, {
            name: 'hemmigumm',
            goals: 0,
            assists: 0,
            saves: 3,
            shots: 3,
            demos: 3,
            totalBoost: 2205
          }, {
            name: 'ousic',
            goals: 1,
            assists: 1,
            saves: 2,
            shots: 2,
            demos: 1,
            totalBoost: 2430
          }, {
            name: 'steb',
            goals: 1,
            assists: 0,
            saves: 2,
            shots: 3,
            demos: 0,
            totalBoost: 2320
          }
        ]
      }
    };
  }


  componentDidMount() {

  }




  render() {

    return (
      <div>

      </div>
    );
  }
}

export default PostGameScreen;