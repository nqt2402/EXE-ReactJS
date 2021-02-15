import React, { Component } from 'react'
// import background from './glassesImage/background.jpg';

export default class GlassesUI extends Component {
    /* Data */
    dataGlasses = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
        { id: 4, price: 30, name: 'DIOR D6005U', url: './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
        { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
        { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
        { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
        { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
        { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.' },
    ];

    /* CSS */
    // backgroundImage: 'url:()' ,
    bodyCSS = { backgroundImage: `url('./glassesImage/background.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center-center' }
    titleCSS = { fontWeight: 600, fontSize: 35, textAlign: 'center', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', }
    glassesArrayCSS = { width: 160, height: 50, cursor: 'pointer', }
    modelCSS = { width: 320, height: 390, };
    glassesToModelCSS = { position: 'absolute', width: 160, height: 50, top: '26%', left: '25%', };

    divModelCSS = { position: 'relative' }
    divContentCSS = { position: 'absolute', top: '67%', left: '0%', backgroundColor: 'rgba(255,170,0,0.55)', paddingLeft: '3%' }
    glassesTitleCSS = { color: 'blue' }
    glassesDetailCSS = { color: 'white' }

    //  state
    state = {
        name: 'GUCCI G8850U',
        url: './glassesImage/v1.png',
        desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
    }

    /* FUNCTION */

    //  set-state
    changeGlasses = (index) => {
        this.setState({
            name: this.dataGlasses[index].name,
            url: `./glassesImage/v${index + 1}.png`,
            desc: this.dataGlasses[index].desc,
        })
    }

    //  renderGlassesArray
    renderGlassesArray = () => {
        const arrayGlasses = this.dataGlasses.map((glasses, index) => {
            return <div className="col-2 py-3" key={index}>
                <img id="glasses" style={this.glassesArrayCSS} onClick={(event) => { this.changeGlasses(index) }} src={glasses.url} alt={glasses.desc} />
            </div>

        });
        return arrayGlasses;
    }

    /* ===REACT RENDER=== */
    render() {
        return (
            <div style={this.bodyCSS}>
                {/* header */}
                <h1 style={this.titleCSS}>TRY APP GLASS ONLINE</h1>
                {/* body */}
                <div className="container" >
                    {/* model */}
                    <div className="d-flex justify-content-around">
                        {/* model after */}
                        <div style={this.divModelCSS}>
                            <img style={this.modelCSS} src={'./glassesImage/model.jpg'} id="modelAfter" alt={'Model'} />
                            <img style={this.glassesToModelCSS} src={this.state.url} id="glassesDetail" />
                            <div style={this.divContentCSS}>
                                <h3 style={this.glassesTitleCSS}>{this.state.name}</h3>
                                <p style={this.glassesDetailCSS}>{this.state.desc}</p>
                            </div>
                        </div>
                        {/* model before */}
                        <div>
                            <img style={this.modelCSS} src={'./glassesImage/model.jpg'} id="modelBefore" alt={'Model'} />
                        </div>
                    </div>
                    {/* glasses */}
                    <div className="row mt-5" style={{ backgroundColor: 'white' }}>
                        {this.renderGlassesArray()}
                    </div>
                </div>
            </div>
        )
    }
}
