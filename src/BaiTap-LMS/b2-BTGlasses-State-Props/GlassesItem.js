import React, { Component } from 'react'

export default class GlassesItem extends Component {
    glassesArrayCSS = { width: 160, height: 50, cursor: 'pointer', }

    render() {
        let { item, actFunc ,inx} = this.props;
        return (
            <div>
                <img style={this.glassesArrayCSS} onClick={(event) => { actFunc(inx) }} src={item.url} alt={item.desc} />
            </div>
        )
    }
}
