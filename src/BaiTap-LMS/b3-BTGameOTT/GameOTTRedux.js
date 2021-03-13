import React, { Component } from 'react'
import './GameOTTRedux.scss';
import Player from './Player';
import GamePlayOTTRedux from './GamePlayOTTRedux';
import Computer from './Computer';

export default class GameOTTRedux extends Component {
    //REACT RENDER
    render() {
        return (
            <div className="bgGameOTT">
                <h3>I'M IRON MAN. I LOVE YOU 3000 !!!</h3>
                <div className="row">
                    <Player />
                    <GamePlayOTTRedux />
                    <Computer />
                </div>
            </div>
        )
    }
}
