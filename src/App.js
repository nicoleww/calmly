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
import lightMode from './assets/icons/light.png';
import darkMode from './assets/icons/dark.png';


class App extends Component {

  // STATE  
  state = {
    sounds : [
      {name: "Birds Chirping", listen: new Audio(BirdSound), look: BirdPhoto},
      {name: "Babbling Brook", listen: new Audio(BrookSound), look: BrookPhoto},
      {name: "Crackling Fire", listen: new Audio(FireSound), look: FirePhoto},
      {name: "Crashing Waves", listen: new Audio(WavesSound), look: WavesPhoto},
      {name: "Rushing Wind", listen: new Audio(WindSound), look: WindPhoto}
    ],
    currentName: "Birds Chirping",
    currentSound: new Audio(BirdSound),
    currentPhoto: BirdPhoto,
    isPlaying: false,
    icon: playIcon,
    isDarkMode: false,
    darkModeIcon: darkMode,
    appClass: "App",
    playerCompClass: "music-player",
    soundsCompClass: "sounds-panel",

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
    let song = this.state.currentSound;
    if (this.state.isPlaying === false) {
      song.play();
      song.addEventListener('ended', function() {
        song.currentTime = 0;
        song.play();
    })
      this.setState({
        isPlaying: true,
        icon: stopIcon
      })
  } else if (this.state.isPlaying === true) {
    song.pause();
    song.currentTime = 0;
    this.setState({
      isPlaying: false,
      icon: playIcon
    })
  }
  }
  handleDarkMode = () => {
    if (this.state.isDarkMode === false) {
      this.setState({
        darkModeIcon: lightMode,
        isDarkMode: true,
        appClass: "App dark-mode",
        soundsCompClass: "sounds-panel dark-mode",
        playerCompClass: "music-player dark-mode"
      })
    } else if (this.state.isDarkMode === true) {
      this.setState({
        darkModeIcon: darkMode,
        isDarkMode: false,
        appClass: "App",
        soundsCompClass: "sounds-panel",
        playerCompClass: "music-player"
      })
    }
  }


  render() {
  return (
    <div className={this.state.appClass}>
      <header>
        <h1>Calmly</h1>
        <button onClick={this.handleDarkMode}><img src={this.state.darkModeIcon} /></button>
      </header>
      <div className="main-container">
        <Sounds sounds={this.state.sounds} handleSound={this.handleSound} soundsCompClass={this.state.soundsCompClass} />
        <MusicPlayer currentName={this.state.currentName} currentSound={this.state.currentSound} currentPhoto={this.state.currentPhoto} handlePlay={this.handlePlay} icon={this.state.icon} playerCompClass={this.state.playerCompClass} />
      </div>
    </div>
  );
  }
}

export default App;
