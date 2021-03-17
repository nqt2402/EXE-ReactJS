import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
    render() {
        let { computerPick } = this.props;

        let keyFrame = `@keyframes Shuffle${Date.now()} {
            0%{top: -50px}
            25%{top: 50px}
            50%{top: -50px}
            75%{top: 50px}
            100%{top: 0px}
        }`;
        //REACT RENDER
        return (
            <div className="player col-4">
                <style>{keyFrame}</style>
                {/* computer pick */}
                <p className="pick-title">Máy chọn : {computerPick.value}</p>
                <div className="thinking">
                    <div className="thinking-pick"></div>
                    <img style={{ animation: `Shuffle${Date.now()} 0.8s` }} className="pick-img" src={computerPick.image} alt={computerPick.image} />
                </div>
                <img className="icon" src='./gameOTTImage/playerComputer.png' alt='./gameOTTImage/playerComputer.png' />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        computerPick: state.OTTReducer.computerPick
    }
}

export default connect(mapStateToProps,null)(Computer)