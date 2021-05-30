import React from 'react';

function MusicPlayer (props) {
    return (
        <div className="music-player">
            <div className="img-container">
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