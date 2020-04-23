import React, { Component } from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

export default class Card extends Component{
    constructor(){
        super()

        this.state = {
            selected: false
        }
    }

    handleClick = (event) => {
        this.setState({
            selected: !(this.state.selected)
        })
    }


    render() {
        return (
            <div onClick={this.handleClick}>
                {(this.state.selected) ? <CardBack hog={this.props.hogItem} /> : <CardFront hog={this.props.hogItem} image={this.props.hogImage}/>}
            </div>
        )
    }
}