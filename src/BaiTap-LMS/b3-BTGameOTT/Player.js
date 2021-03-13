import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        let { gameState } = this.props;
        //REACT RENDER
        return (
            <div className="player col-4">
                {/* player pick */}
                <p className="pick-title">Bạn chọn: {gameState.playerPick.value}</p>
                <div className="thinking">
                    <div className="thinking-pick"></div>
                    <img className="pick-img" src={gameState.playerPick.image} alt={gameState.playerPick.image} />
                </div>

                <img className="icon" src='./gameOTTImage/player.png' alt='./gameOTTImage/player.png' />

                <div className="selectOTT">
                    {gameState.OTTArray.map((item, index) => {
                        return <button key={index} onClick={() => {
                            this.props.pickValue(item.image, item.value)
                        }} className="btn"><img className="option" src={item.image} alt={item.image, item.value} /></button>
                    })}
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
            dispatch(action)
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)