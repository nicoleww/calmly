import React from 'react';
import './Sounds.css';

function Sounds (props) {
    return (
        <div className={props.soundsCompClass}>
        {props.sounds.map((sound) =>
            <div className="btn"> 
            <button 
                onClick={() => {
                    props.handleSound(sound.name, sound.listen, sound.look)
                }}
            >{sound.name}</button>
            </div>
        )}
        </div>
    )
}

export default Sounds;