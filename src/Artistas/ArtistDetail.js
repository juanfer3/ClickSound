import React,{ Component } from 'react';
import ArtistBox from'./ArtistBox';
import { getArtists } from './../myApi/api-artists'
import Paper from 'material-ui/Paper';


//import fire from './myApi/firebase';




class ArtistDetailView extends Component {



  render() {
    console.log();

    return (

      <div>
        <h1>Hola{this.props.artists}</h1>
      </div>



    );
  }
}

export default ArtistDetailView;
