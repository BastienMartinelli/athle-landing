import React, { Component } from 'react';
import './App.css';

import smartphone_img from './img/iphone.png'
import playstore_img from './img/google-play-badge.png' 

class App extends Component {
  render() {
    return (
      <section className="hero">
        <HeaderComponent></HeaderComponent>
        <HeroBodyComponent></HeroBodyComponent>
      </section>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <div className="hero-head">
        <header className="nav">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item" href="../index.html">
                <img src="" alt="Logo"></img>
              </a>
            </div>
            <span className="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className="nav-right nav-menu">
              <a className="nav-item is-active">
                Home
                </a>
              <a className="nav-item">
                Examples
                </a>
              <a className="nav-item">
                Documentation
                </a>
              <span className="nav-item">
                <a className="button is-info is-outlined">
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

class HeroBodyComponent extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-2">
            Hero Heading
            </h1>
          <h2 className="subtitle is-5">
            A hero description could go here.
            </h2>
          <p>
            <a href="https://play.google.com/store?hl=fr">
              <img src={playstore_img} className="google-badge" alt=""></img>
            </a>
          </p>
          <img src={smartphone_img} className="smartphone-img" alt=""></img>
        </div>
      </div>
    );
  }
}

export default App;
