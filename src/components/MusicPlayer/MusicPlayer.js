import React from 'react';
import './MusicPlayer.css';
import volUp from '../../assets/icons/vol-up.png';
import volDown from '../../assets/icons/vol-down.png';

function MusicPlayer (props) {
    return (
        <div className={props.playerCompClass}>
            <div className={props.musicPlayerClass}>
                <img src={props.currentPhoto} />
            </div>
            <div className="player-info">
                <h3>{props.currentName}</h3>
                <button onClick={props.handlePlay}><img src={props.icon} /></button>
            </div>
        </div>
    )
}

export default MusicPlayer;