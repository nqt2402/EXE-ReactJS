import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        let { OTTArray, newState } = this.props;
        //REACT RENDER
        return (
            <div className="player col-4">
                {/* player pick */}
                <p className="pick-title">Bạn chọn: {OTTArray.find(item =>
                    item.bet === true
                ).id}</p>
                <div className="thinking">
                    <div className="thinking-pick"></div>
                    <img className="pick-img" src={OTTArray.find(item =>
                        item.bet === true
                    ).image} alt={OTTArray.find(item =>
                        item.bet === true
                    ).image} />
                </div>

                <img className="icon" src='./gameOTTImage/player.png' alt='./gameOTTImage/player.png' />

                <div className="selectOTT">
                    {OTTArray.map((item, index) => {
                        let borderCSS = { borderRadius: '50%', background: 'transparent', border: 'none' };
                        if (item.bet) {
                            borderCSS = { border: '3px solid #f1da36', borderRadius: '50%', background: 'transparent' };
                        }
                        return <button style={borderCSS} key={index} onClick={() => {
                            this.props.betGame(item.id)
                        }} className="option"><img src={item.image} alt={item.image, item.value} /></button>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // playerPick: state.OTTReducer.playerPick,
        // newState: state.OTTReducer,
        OTTArray: state.OTTReducer.OTTArray,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        betGame: (betID) => {
            dispatch({
                type: 'BET_GAME',
                betID
            });
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player)