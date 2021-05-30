import React from 'react';
import './MusicPlayer.css';

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