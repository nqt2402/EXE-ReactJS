import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        let { gameState } = this.props;
        //REACT RENDER
        return (
            <div className="player col-4">
                {/* computer pick */}
                <p className="pick-title">Máy chọn : {gameState.computerPick.value}</p>
                <div className="thinking">
                    <div className="thinking-pick"></div>
                    <img className="pick-img" src={gameState.computerPick.image} alt={gameState.computerPick.image} />
                </div>
                <img className="icon" src='./gameOTTImage/playerComputer.png' alt='./gameOTTImage/playerComputer.png' />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        gameState: state.OTTReducer
    }
}

export default connect(mapStateToProps)(Computer)