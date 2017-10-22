import React,{ Component } from 'react';
import './../App.css';
import './ArtistBox.css';
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiMessages from 'react-icons/lib/ti/messages'
//import fire from './myApi/firebase';



class ArtistBox extends Component {

  render() {
    console.log(this.props.artist);
    const {name, likes, imagen, comments}=this.props.artist;

    return (
      <div className="ContenedorArtistBox">

      <div className="CajaArtistBox">
        <section className="ArtixBox">

          <img src={ imagen }/>
            <div className="contenido">

            <h1>{name}</h1>
            <div className="reacciones">
                <div className="cajitas_reacciones">
                  <TiHeartOutline size={50} color={'#ec407a'}/>
                  <h3>{likes}</h3>
                </div>

                <div>
                  <TiMessages size={50} color={'#009688'}/>
                  <h3>{comments}</h3>
                </div>

              </div>

            </div>
        </section>
        </div>


</div>







    );
  }
}

export default ArtistBox;
