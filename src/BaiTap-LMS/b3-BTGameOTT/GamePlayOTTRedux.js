import React, { Component } from 'react'
import './GameOTTRedux.css';

import { connect } from 'react-redux';

class GamePlayOTTRedux extends Component {

    //REACT RENDER
    render() {
        let { gameState } = this.props;
        return (
            <div className="gamePlay container">
                <div className="player">
                    {/* player pick */}
                    <p className="pick">Bạn chọn: {gameState.playerPick.value}</p>
                    <img className="option" src={gameState.playerPick.image} alt={gameState.playerPick.image} />
                    <img className="icon" src='./gameOTTImage/player.png' alt='./gameOTTImage/player.png' />

                    <div className="selectOTT">
                        {gameState.OTTArray.map((item, index) => {
                            return <button key={index} onClick={() => {
                                this.props.pickValue(item.image, item.value)
                            }} className="btn"><img className="option" src={item.image} alt={item.image, item.value} /></button>
                        })}
                    </div>
                </div>

                <div className="result">
                    <p>KẾT QUẢ : {gameState.playerResult}</p>
                    <p>Số bàn thắng : {gameState.playerScores}</p>
                    <p>Tỉ lệ thắng hiện tại : {gameState.winRate}</p>
                    <p>Số bàn chơi : {gameState.playerOverAll}</p>
                    <button onClick={() => {
                        this.props.playGame(gameState.playerPick.image, gameState.playerPick.value)
                    }} className="btn btn-success">Play Game</button>
                </div>

                <div className="player">
                    {/* computer pick */}
                    <p className="pick">Máy chọn : {gameState.computerPick.value}</p>
                    <img className="option" src={gameState.computerPick.image} alt={gameState.computerPick.image} />
                    <img className="icon" src='./gameOTTImage/playerComputer.png' alt='./gameOTTImage/playerComputer.png' />
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
        pickValue: (img, value) => {
            const action = {
                type: 'PLAYER_PICK',
                imgSource: img,
                imgValue: value,
            }
            dispatch(action);
        },

        playGame: (img, value) => {
            const action = {
                type: 'PLAY_GAME',
                imgSource: img,
                imgValue: value,
            }
            dispatch(action);
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayOTTRedux);