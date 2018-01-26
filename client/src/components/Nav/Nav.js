import React, { Component } from "react";
import "./Nav.css";
import {socket} from "../../config/socket.js";



class Nav extends Component {


  componentDidMount(){

    socket.on('test',(msg)=>{

      console.log(msg);
    })
  }


  renderNavs = () => {
    if (window.location.pathname === "/" || window.location.pathname === "/signUp") {
      return (
        <div className="NavWrap">
          <ul className="nav">
            <li><label className="btn" for="modal-1">About</label></li>
            <input className="modal-state" id="modal-1" type="checkbox" />
              <div className="modal">
                <label className="modal__bg" for="modal-1"></label>
                <div className="modal__inner">
                  <label className="modal__close" for="modal-1"></label>
                  <h2>Rules</h2>
                  <p>Much like rock-paper-scissors, this is a game of guesswork.
                     In order to 'shoot' you must have at least 1 charge.
                     If you have 3 'charge', pressing the diamond is an automatic win.
                     To gain charge, press the circle icon. To block, press the shield icon.
                     When your opponent's health reaches 0, you win!
                     This app is still in development. Please be kind!</p>
                </div>
              </div>
          </ul>
        </div>
      );
    } else if (window.location.pathname === "/lobby") {
      return (
        <div className="NavWrap">
          <ul className="nav">
            <li className="username"><a>{this.props.username}</a></li>
            <li><label className="btn" for="modal-1">Rules</label></li>
            <input className="modal-state" id="modal-1" type="checkbox" />
              <div className="modal">
                <label className="modal__bg" for="modal-1"></label>
                <div className="modal__inner">
                  <label className="modal__close" for="modal-1"></label>
                  <h2>Rules</h2>
                  <p>Much like rock-paper-scissors, this is a game of guesswork.
                     In order to 'shoot' you must have at least 1 charge.
                     If you have 3 'charge', pressing the diamond is an automatic win.
                     To gain charge, press the circle icon. To block, press the shield icon.
                     When your opponent's health reaches 0, you win!
                     This app is still in development. Please be kind!</p>
                </div>
              </div>
            <li><a href="/room">Find Game</a></li>
            <li className="logout-btn"><a href="/">Logout</a></li>
          </ul>
        </div>
      );
    } else if (window.location.pathname === "/room") {
      return (
        <div className="NavWrap">
          <ul className="nav">
            <li className="username"><a>USERNAME</a></li>
            <li><label className="btn" for="modal-1">Rules</label></li>
            <input className="modal-state" id="modal-1" type="checkbox" />
              <div className="modal">
                <label className="modal__bg" for="modal-1"></label>
                <div className="modal__inner">
                  <label className="modal__close" for="modal-1"></label>
                  <h2>Rules</h2>
                  <p>Much like rock-paper-scissors, this is a game of guesswork.
                     In order to 'shoot' you must have at least 1 charge.
                     If you have 3 'charge', pressing the diamond is an automatic win.
                     To gain charge, press the circle icon. To block, press the shield icon.
                     When your opponent's health reaches 0, you win!
                     This app is still in development. Please be kind!</p>
                </div>
              </div>
            <li><a href="/lobby">Quit Game</a></li>
            <li className="logout-btn"><a href="/">Logout</a></li>
          </ul>
        </div>
      );
    }
  };


  render() {

    return (

      <div className="navWrap">
        {this.renderNavs()}
      </div>

      );
    }
  }

export default Nav;
