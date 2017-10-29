import React,{ Component } from 'react';
import ArtistBox from'./ArtistBox';
import { getArtists } from './../myApi/api-artists'
import Paper from 'material-ui/Paper';
import {Actions} from 'react-router-flux';
import {Link} from 'react-router'


//import fire from './myApi/firebase';




class ArtistList extends Component {


  constructor(props) {
        super(props);
        this.state = { artists: [], myArtist:[]};
    }

    componentDidMount(){
    getArtists()
      .then(data => this.setState({artists: data}))
  }

 presionar(artist){
   //console.log(artist);
   //let myArtist= artist
   //this.setState({myArtist:myArtist})

 }


  render() {


    return (

        <div>

        {
          this.state.artists.map(artist=>{

          return (
            <div onClick={()=>this.presionar(artist)}>

              <ArtistBox  artist={artist} /*myArtist={this.state.myArtist}*/
              />

            </div>

          )

        }
      )

      }
      </div>



    );
  }
}

export default ArtistList;
