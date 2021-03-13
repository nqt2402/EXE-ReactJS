import React, { Component } from 'react'
import { connect } from 'react-redux';
import './GameOTTRedux.scss';

class GamePlayOTTRedux extends Component {

    //REACT RENDER
    render() {
        let { gameState } = this.props;
        return (
            <div className="gamePlay container col-4">
                <div className="result">
                    <p>KẾT QUẢ : {gameState.playerResult}</p>
                    <p>Số bàn thắng : {gameState.playerScores}</p>
                    <p>Tỉ lệ thắng : {gameState.winRate}</p>
                    <p>Số bàn chơi : {gameState.playerOverAll}</p>
                    <button onClick={() => {
                        this.props.playGame(gameState.playerPick.image, gameState.playerPick.value)
                    }} className="btn btn-success">Play Game</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        gameState: state.OTTReducer
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        playGame: (img, value) => {
            const action = {
                type: 'PLAY_GAME',
                imgSource: img,
                imgValue: value,
            }
            dispatch(action)
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayOTTRedux);