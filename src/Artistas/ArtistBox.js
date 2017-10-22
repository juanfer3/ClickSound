import React,{ Component } from 'react';
import './../App.css';
import './ArtistBox.css';
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiMessages from 'react-icons/lib/ti/messages'
//import fire from './myApi/firebase';


const imagen= 'https://files.setbeat.com/assets/tmp/s_256934.jpg';
const likes = 124;
const comments= 250;
class ArtistBox extends Component {

  render() {
    return (
      <div>
        <section className="ArtixBox">

          <img src={ imagen }/>
            <div className="contenido">

            <h1>Andy Shouf</h1>
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








    );
  }
}

export default ArtistBox;
