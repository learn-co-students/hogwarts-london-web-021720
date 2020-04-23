import React, { Component } from 'react';
import Card from './Card';

export default class Hog extends Component{
    constructor(){
        super()
    }

    handleHogImage = (hogName) => {
        return hogName.toLowerCase().replace(/\s/g, '_')
    }

    render() {
        return (
            <div className="outerHogs">
                {
                    this.props.hogs.map(hog => <Card hogItem={hog} hogImage={this.handleHogImage(hog.name)} />)
                }
            </div>
        )
    }
}