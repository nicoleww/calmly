import React from 'react';

function MusicPlayer (props) {
    return (
        <div className="music-player">
            <img src={props.currentPhoto} />
            <h3>{props.currentName}</h3>
            <button
                onClick={props.handlePlay}
            ><img src={props.icon} /></button>
        </div>
    )
}

export default MusicPlayer;