import React from "react"; 
import ReactDOM from "react-dom"

class Bomb extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            counter: 0,
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({
                counter: this.state.counter +1
            })
        },1000); 
    }

    detonate(){
        switch(this.state.counter){
            case 0: return 'Tick'; 
            break; 
            case 1: return "Tock"; 
            break; 
            case 2: return "Boom"; 
            default: this.setState({
                counter: 0 
            })
        }
    }

    render(){
        return (
            <p>{this.detonate()}</p>
        )
    }
}


export default Bomb; 