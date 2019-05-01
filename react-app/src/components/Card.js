import React, { Component } from 'react';
import '../App.css'

class Card extends Component {

    render(){
        return (
            <div className="Card">
                <div className="card-id">
                    <h1>{this.props.person.id}/{this.props.total}</h1>
                </div>
                <div className="card-name">
                    <h1>{this.props.person.name.first} {this.props.person.name.last}</h1>
                </div>
                <div className="card-about">
                    <p><b>From:</b> {this.props.person.city}, {this.props.person.country}</p>
                    <p><b>Job Title:</b> {this.props.person.title}</p>
                    <p><b>Employer:</b> {this.props.person.employer}</p>
                    <p><b><br></br>Favorite Movies:</b></p>
                    <p id="tab">1. {this.props.person.favoriteMovies[0]}</p>
                    <p id='tab'>2. {this.props.person.favoriteMovies[1]}</p>
                    <p id='tab'>3. {this.props.person.favoriteMovies[2]}</p>
                </div>

            </div>
            )
    }

}

export default Card;
