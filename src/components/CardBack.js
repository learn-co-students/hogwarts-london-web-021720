import React, { Component } from 'react';

export default class CardBack extends Component{
    constructor(){
        super()
    }



    render() {
        console.log(this.props.hog)
        return (
            <div className="pigTile">
                <p>
                    This hog's speciality: {this.props.hog.specialty}
                </p>
                <p>
                    Weight: {this.props.hog.weight}
                </p>
                <p>
                    Highest Medal: {this.props.hog['highest medal achieved']}
                </p>
                <p>
                    This hog is{(this.props.hog.greased) ? "" : " not"} greased!
                </p>
            </div>
        )
    }
    


}