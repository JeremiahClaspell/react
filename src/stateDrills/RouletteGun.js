import React from "react"; 
import ReactDOm from 'react-dom'; 

class Roulette extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            chamber: null, 
            spinningTheChamber: false
        }; 
    }

    handleShoot = ()=>{
        this.setState({
            shot: this.state.shot +1
        })
    }

    render(){
        return (
            <div>
                <h1>Shot Count: {this.state.shot}</h1>
                <button onClick={this.handleShoot}>Shoot</button>
            </div>
        )
    }
}

export default Roulette; 