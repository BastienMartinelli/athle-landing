import React, { Component } from 'react';
import './App.css';

import smartphone_img from './img/iphone.png'
import playstore_img from './img/google-play-badge.png'

class App extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <HeaderComponent></HeaderComponent>
          <HeroBodyComponent></HeroBodyComponent>
        </section>
        <UserForm></UserForm>
        <AppFooter></AppFooter>
      </div>
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
            <a href="https://play.le.com/store?hl=fr">
              <img src={playstore_img} className="google-badge" alt=""></img>
            </a>
          </p>
          <img src={smartphone_img} className="smartphone-img" alt=""></img>
        </div>
      </div>
    );
  }
}

class UserForm extends Component {
  render() {
    return (
      <div className="user-form">
        <div className="field">
          <label className="label">Email</label>
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder="Email"></input>
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <p className="control">
              <textarea className="textarea" placeholder="Questions, suggestions..."></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-primary">Soumettre</button>
            </p>
          </div>
          <br></br>
          <br></br>
        </div>
        );
  }
}

class AppFooter extends Component {
  render() {
    return(
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>Athle App</strong> by CODEIN.
            </p>
            <p>
              <a className="icon" href="https://github.com/BastienMartinelli/athle-landing">
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default App;
