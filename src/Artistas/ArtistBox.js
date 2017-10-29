import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import './../App.css';
import './ArtistBox.css';
import TiHeartOutline from 'react-icons/lib/ti/heart-outline';
import TiMessages from 'react-icons/lib/ti/messages';
import ArtistDetailView from './ArtistDetail';
import { Link } from 'react-router';
import $ from "jquery";
//import fire from './myApi/firebase';

//const {CSSTransitionGroup} = React.addons;





class ArtistBox extends Component {
  clickImg(artists){

        this.setState({artists: artists})

    }

  render() {
    const {artists}=this.props.artist;
    //console.log(this.artists);
    //console.log(this.props.myArtist);
    const {name, likes, imagen, comments}=this.props.artist;


    return (



      <div className="ContenedorArtistBox">
      <div id="ArtistDetail">
      </div>
          <div className="CajaArtistBox">

            <section className="ArtixBox">

            {/*<Link to={`/detalle`} params={ {name:name}} >*/}
              <img src={ imagen } onClick={()=>this.clickImg(this.props.artist)}/>
            {/*</Link>*/}
                <div className="contenido" >

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
