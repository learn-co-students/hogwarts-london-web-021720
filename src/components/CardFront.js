import React, { Component } from 'react';

export default class CardFront extends Component{
    constructor(){
        super()
        }
    render() {
        console.log(`../hog-imgs/${this.props.image}.jpg`)
        return (
            <div className="pigTile">
                <img src={`../hog-imgs/${this.props.image}.jpg`} alt={"Hog"}></img>
                <p className="card">
                    {this.props.hog.name}

                </p>
            </div>
        )
    }
}