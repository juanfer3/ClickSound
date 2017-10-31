import React,{ Component } from 'react';
import ArtistList from './Artistas/ArtistList';
import ArtistDetailView from './Artistas/ArtistDetail';
import Navbar from './Navbar/Navbar';
//import  {Router, Route, hashHistory}  from 'react-router';
import App from './App';
import { Router, Route, hashHistory, IndexRoute  } from 'react-router';

const artists=[]
export default class AppRoutes extends Component {
  render(){

    return(
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={ArtistList} />
            <Route name="/Home" component={ArtistList} />
            //<Route name="/detalle" component={ArtistDetailView} />
          </Route>
        </Router>
      </div>
    )
  }
}
