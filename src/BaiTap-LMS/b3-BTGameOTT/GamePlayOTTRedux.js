import React, { Component } from 'react'
import { connect } from 'react-redux';
import './GameOTTRedux.scss';

class GamePlayOTTRedux extends Component {

    //REACT RENDER
    render() {

        let { output } = this.props;
        return (
            <div className="gamePlay container col-4">
                <div className="result">
                    <p>KẾT QUẢ : {output.result.playerResult}</p>
                    <p>Số bàn thắng : {output.result.playerScores}</p>
                    <p>Tỉ lệ thắng : {output.result.winRate}</p>
                    <p>Số bàn chơi : {output.result.playerOverAll}</p>
                    <button onClick={() => {
                        this.props.playGame()
                    }} className="btn btn-success">Play Game</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        output: state.OTTReducer,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        playGame: (playerPickID) => {
            let count = 0;
            let randomLoop = setInterval(() => {
                dispatch({
                    type: 'RANDOM',
                })
                count++;
                console.log(count);
                if (count > 10) {
                    clearInterval(randomLoop);

                    dispatch({
                        type: 'PLAY_GAME',
                        playerPickID
                    })
                }
            }, 200);
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayOTTRedux);