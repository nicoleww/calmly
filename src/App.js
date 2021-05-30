import React, { Component } from 'react';
import './App.css';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Sounds from './components/Sounds/Sounds';

class App extends Component {

  // STATE  
  state = {
    sounds : [
      {name: "birds", listen: "../assets/sounds/birds.wav", look: "../assets/photos/birds.jpg"},
      {name: "brook", listen: "../assets/sounds/brook.wav", look: "../assets/photos/brook.jpg"},
      {name: "fire", listen: "../assets/sounds/fire.wav", look: "../assets/photos/fire.jpg"},
      {name: "waves", listen: "../assets/sounds/waves.wav", look: "../assets/photos/waves.jpg"},
      {name: "wind", listen: "../assets/sounds/wind.mp3", look: "../assets/photos/wind.jpg"}
    ],
    currentSound: "",
    currentPhoto: "",
  }

  //  HANDLER FUNCTIONS
  handleSound = (incomingSound, incomingPhoto) => {
    this.setState({
      currentSound: incomingSound,
      currentPhoto: incomingPhoto
    })
  }


  render() {
  return (
    <div className="App">
      <header className="title">
        <h1>Calmly</h1>
      </header>
      <Sounds sounds={this.state.sounds} handleSound={this.handleSound} />
      <MusicPlayer currentSound={this.state.currentSound} currentPhoto={this.state.currentPhoto} />
    </div>
  );
  }
}

export default App;
