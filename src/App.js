import React,{ Component } from 'react';
import './App.css';
import ArtistBox from'./Artistas/ArtistBox';
//import fire from './myApi/firebase';
const artist={
  imagen : 'https://files.setbeat.com/assets/tmp/s_256934.jpg',
  likes : 124,
  comments: 250
}

class App extends Component {

  render() {
    return (
      <ArtistBox/>
    );
  }
}

export default App;
