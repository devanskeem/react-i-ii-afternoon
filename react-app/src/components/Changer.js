import React, { Component } from 'react';
import '../App.css'
import Card from './Card'
import data from '../data'

class Changer extends Component {
    constructor(){
        super()
        this.state = {
            currId: 1,
            peopleArr: data
        }

    }

    nextCard = () => {
        let id = this.state.currId
        if (id === this.state.peopleArr.length)this.setState({currId: 1})
        else this.setState({currId: id+1})
        console.log(this.state.currId)
    }
    prevCard = () => {
        let id = this.state.currId
        if(id === 1) this.setState({currId: this.state.peopleArr.length})
        else this.setState({currId: id-1})
        console.log(this.state.currId)
    }
    render(){
        return (
            <div>
                <div>
                    <Card person={this.state.peopleArr[this.state.currId - 1]} total={this.state.peopleArr.length}/>
                </div>
                
                <div className="buttons">
                    <div className="prevnext">
                        <button onClick={this.prevCard}>{'< Previous'}</button>
                    </div>
                    <div className="edn">
                        <button>Edit</button>
                        <button>Delete</button>
                        <button>New</button>
                    </div>
                    <div className="prevnext">
                        <button onClick={this.nextCard}>{'Next >'}</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Changer;