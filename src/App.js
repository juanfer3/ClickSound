import React,{ Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ArtistList from './Artistas/ArtistList';
import Navbar from './Navbar/Navbar';

//import fire from './myApi/firebase';



class App extends Component {



  render() {


    return (
      <MuiThemeProvider>
        <Navbar/>

        {this.props.children}

      </MuiThemeProvider>


    );
  }
}

export default App;
