import React from 'react';
import ReactDOM from 'react-dom'; 

class TheDate extends React.Component {

constructor(props){
    super(props); 

    this.state={
        dateTime: new Date(),
        counter: 1
    }; 
}

componentDidMount(){
    this.interval = setInterval(()=>{
        this.setState({
            dateTime: new Date(), 
                })
    },1)
}

componentWillUnmount(){
    clearInterval(this.interval)
}

handleClick=()=>{
    this.setState({
        counter: this.state.counter +1
    })
}

    render(){
        return (
            <div>
                {this.state.counter}
                <button onClick={this.handleClick}>click me</button>
            </div>
        )
    }

}

export default TheDate