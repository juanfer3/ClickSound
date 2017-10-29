import React,{ Component } from 'react';
import './Navbar.css';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
const styles={
  Navbar:{
    background: '#94618e',
    height: 150,
    width: 10000,
    color: 'black',
    position:'fixed'


  },
  h1:{
    color:'black !important'
  }

}
const Navbar = () => (
  <Card style={styles.Navbar}
        className="Nav"
  >
  <div className="CajaTitulo">
    <h1 className="Titulo">LO MEJOR EN MUSICA</h1>
  </div>

  </Card>
);

export default Navbar;
