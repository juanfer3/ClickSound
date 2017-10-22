import React,{ Component } from 'react';
import './App.css';
import ArtistBox from'./Artistas/ArtistBox';
import { getArtists } from './myApi/api-artists'
//import fire from './myApi/firebase';




class App extends Component {
  constructor(props) {
        super(props);
        this.state = { artists: [] };
    }

    componentDidMount(){
    getArtists()
      .then(data => this.setState({artists: data}))
  }

  render() {


    return (

        <div>{this.state.artists.map(artist=>{
          return <ArtistBox artist={artist}/>
        })

      }</div>



    );
  }
}

export default App;
