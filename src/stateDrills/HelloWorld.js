import React from 'react'; 
import ReactDOM from 'react-dom'; 

class HelloWorld extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            who: 'World'
        }
    }

    handleButtonFriend = ()=> {
        this.setState({
            who: "Friend"
        })
    }
    handleButtonReact = ()=> {
        this.setState({
            who: "React"
        })
    }
    handleButtonWorld = ()=> {
        this.setState({
            who: "World"
        })
    }

    render(){
        return (
            <div>
                <h1>Hello, {this.state.who}</h1>
                <button onClick={this.handleButtonFriend}>Friend</button>
                <button onClick={this.handleButtonReact}>React</button>
                <button onClick={this.handleButtonWorld}>World</button>
            </div>
        );
    }
};

export default HelloWorld; 