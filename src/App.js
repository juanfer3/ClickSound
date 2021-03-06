import React,{ Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ArtistList from './Artistas/ArtistList';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import firebase from 'firebase';
import fire from './myApi/firebase';

//import fire from './myApi/firebase';



class App extends Component {
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
        <MuiThemeProvider>
          <Navbar/>
            {this.props.children}
            <div><button onClick={this.handleAuth.bind(this)}>Login con Google</button></div>
        </MuiThemeProvider>


      )

    }
    //si no lo esta
  }


  render() {


    return (
      <div className="App">
        {this.renderLoginButton()}
      </div>


    );
  }
}

export default App;
