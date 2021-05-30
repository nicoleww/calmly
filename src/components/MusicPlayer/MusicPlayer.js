import React from 'react';
// IMPORT FILES FROM ASSETS
import playIcon from '../../assets/icons/play.png';
import stopIcon from '../../assets/icons/stop.png';

function MusicPlayer (props) {
    return (
        <div className="music-player">
            <img src={props.currentPhoto} />
            <h3>{props.currentName}</h3>
            <button><img src={playIcon} /></button>
            <button><img src={stopIcon} /></button>
        </div>
    )
}

export default MusicPlayer;