import React, { Component } from 'react';
 
import './App.css';

class MyButton extends Component {
  render(){
    return (
      <button onClick={() => {this.props.handleClick(this.props.src);}}>
    {this.props.src }</button>
    )
  };
}
class MyLabel extends Component{
  render(){
    console.log(this.props)
    return <p>Clicke no : {this.props.text}</p>
  }
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) =>{
    this.setState({labelText});
  }
  render() {
    console.log(this.state)
    return(
      <div className="App">
      <MyLabel text={this.state.labelText}/>
      <MyButton handleClick={this.setLabelText} src="https://cinema10.com.br/upload/noticias/dorybeluga1.jpg" alt="Smiley face" height="42px" width="42px"/>
      <MyButton handleClick={this.setLabelText} src="https://cinema10.com.br/upload/noticias/dorybeluga2.jpg" alt="Smiley face" height="42px" width="42px"/>
      <MyButton handleClick={this.setLabelText} src="https://cinema10.com.br/upload/noticias/dorybeluga4.jpg" alt="Smiley face" height="42px" width="42px"/>
      <MyButton handleClick={this.setLabelText} src="https://cinema10.com.br/upload/noticias/dorybeluga5.jpg" alt="Smiley face" height="42px" width="42px"/>
      <MyButton handleClick={this.setLabelText} src="https://cinema10.com.br/upload/noticias/dorybeluga6.jpg" alt="Smiley face" height="42px" width="42px"/>
      <MyButton handleClick={this.setLabelText} src="https://cinema10.com.br/upload/noticias/dorybeluga7.jpg" alt="Smiley face" height="42px" width="42px"/>
      </div>
    );
  } 
}

export default App;
