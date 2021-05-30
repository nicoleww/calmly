import React, { Component } from 'react';
import './App.css';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import Sounds from './components/Sounds/Sounds';
// IMPORT FILES FROM ASSETS
import BirdPhoto from './assets/photos/birds.jpg';
import BirdSound from './assets/sounds/birds.wav';
import BrookPhoto from './assets/photos/brook.jpg';
import BrookSound from './assets/sounds/brook.wav';
import FirePhoto from './assets/photos/fire.jpg';
import FireSound from './assets/sounds/fire.wav';
import WavesPhoto from './assets/photos/waves.jpg';
import WavesSound from './assets/sounds/waves.wav';
import WindPhoto from './assets/photos/wind.jpg';
import WindSound from './assets/sounds/wind.mp3';
import playIcon from './assets/icons/play.png';
import stopIcon from './assets/icons/stop.png';


class App extends Component {

  // STATE  
  state = {
    sounds : [
      {name: "Birds Chirping", listen: BirdSound, look: BirdPhoto},
      {name: "Babbling Brook", listen: BrookSound, look: BrookPhoto},
      {name: "Crackling Fire", listen: FireSound, look: FirePhoto},
      {name: "Crashing Waves", listen: WavesSound, look: WavesPhoto},
      {name: "Rushing Wind", listen: WindSound, look: WindPhoto}
    ],
    currentName: "Birds Chirping",
    currentSound: BirdSound,
    currentPhoto: BirdPhoto,
    isPlaying: false,
    icon: playIcon,
  }

  //  HANDLER FUNCTIONS
  handleSound = (incomingName, incomingSound, incomingPhoto) => {
    this.setState({
      currentName: incomingName,
      currentSound: incomingSound,
      currentPhoto: incomingPhoto
    })
  }
  handlePlay = () => {
    let song = new Audio(this.state.currentSound);
    if (this.state.isPlaying === false) {
      this.setState({
        isPlaying: true,
        icon: stopIcon
      })
      song.play();
      song.addEventListener('ended', function() {
        song.currentTime = 0;
        song.play();
    })
  } else if (this.state.isPlaying === true) {
    this.setState({
      isPlaying: false,
      icon: playIcon
    })
    song.pause();
    song.currentTime = 0;
  }
  }


  render() {
  return (
    <div className="App">
      <header className="title">
        <h1>Calmly</h1>
      </header>
      <Sounds sounds={this.state.sounds} handleSound={this.handleSound} />
      <MusicPlayer currentName={this.state.currentName} currentSound={this.state.currentSound} currentPhoto={this.state.currentPhoto} handlePlay={this.handlePlay} icon={this.state.icon} />
    </div>
  );
  }
}

export default App;
