import React, { Component } from 'react';
import './App.css';
import fire from './../myApi/firebase';

class Datos extends Component {
  constructor(){
    super();
    console.log('entra al constructor');
    this.state={
      name:10
    }

  }

  componentDidMount(){
    console.log('hola entro al did');
    const nameRef = fire.database().ref().child('object').child('name')
    nameRef.on('value', snapshot => {
      this.setState({
        name: snapshot.val()
      })
    })
    console.log();

  }



  render() {
    return (
      <div className="App">
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
