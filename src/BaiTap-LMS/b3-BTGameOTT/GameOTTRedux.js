import React, { Component } from 'react'
import './GameOTTRedux.css';
import GamePlayOTTRedux from './GamePlayOTTRedux';

export default class GameOTTRedux extends Component {
    render() {
        return (
            <div className="bgGameOTT">
                <h3>I'M IRON MAN. I LOVE YOU 3000 !!!</h3>
                <div className="row">
                    <GamePlayOTTRedux/>
                </div>
            </div>
        )
    }
}
