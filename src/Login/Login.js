import React, { Component } from 'react';
import './Login.css'
import fire from './../myApi/firebase';
import firebase from 'firebase'

class Login extends Component {

  constructor(){
    super();
    this.state ={
      user:null
    };
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user=>{
      this.setState({
        user:user
      });
    })
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log(this.provider);

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesion` ))
      .catch(error => console.log(`Error in user ${error.code}: ${error.message}`))
  }

  handleLogout(){

    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha iniciado sesion` ))
    .catch(error => console.log(`Error in user ${error.code}: ${error.message}`))
  }

  renderLoginButton(){
    //si el usuario esta logueado
    if(this.state.user){
      return (
        <div>
        <img src={this.state.user.photoURL} alt={this.state.user.displayName}/>
        HOla{this.state.user.displayName}
        <button onClick={this.handleLogout}>logout</button>
        </div>
      );
    } else{
      return(
        <div><button onClick={this.handleAuth.bind(this)}>Login con Google</button></div>

      )

    }
    //si no lo esta
  }

  render() {
    return (
      <div className="boton">
        {this.renderLoginButton()}
      </div>
    );
  }
}

export default Login;
