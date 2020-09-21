import React from 'react';
import './assets/css/App.css';
import logo from './assets/img/logo.png';
import ui from './assets/img/ui.svg';
import store from './assets/img/store.svg';
import stats from './assets/img/stats.svg';
import giving from './assets/img/giving.svg';

function App() {
  return (
    <div class="content">

    <div class="sticky-container">
      <a href="#" class="sticky-link">
        <img class = "sticky-logo" src= {logo}></img>
        <p class="sticky-tagline"><i>Donation made Great</i></p>
      </a>
    </div>

    <div class="row">
      <div class="column">
        <img class = "intro-logo" src= {logo}></img>
      </div>
      <div class="column2">
        <p class="intro-welcome">Welcome to DON8<br></br><p class="descriptor">Food, drinks, and donation</p></p>
      </div>
    </div>
    
    <div class="description">
      <p>DON8 is the most feel-good app out there, allowing <i>you</i> to donate food while enjoying it too. Order from 
      your favourite local restaurants and take part in campaigns to help out those who can't.</p><br></br><br></br>
    </div>

    <div class="download">
    <a href="#">
      <div>
        <p class="download-txt"><i>Download</i></p>
      </div>
    </a>
    </div>
<br /><br />

    <div class="icon-grid">
      <div class="icon-row">
        <div class="grid-column">
          <a href="#">
          <img src={ui} class = "ui-img"></img>
          <span><br />Appealing Interface</span>
          </a>
        </div>
        <div class="grid-column">
          <a href="#">
          <img src={store} class = "store-img"></img>
          <span><br />Local Stores</span>
          </a>
        </div>
        <div class="grid-column">
          <a href="#">
          <img src={stats} class = "stats-img"></img>
          <span><br />Your Statistcs</span>
          </a>
        </div>
        <div class="grid-column">
          <a href="#">
          <img src={giving} class = "giving-img"></img>
          <span>The Joy of Giving</span>
          </a>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
