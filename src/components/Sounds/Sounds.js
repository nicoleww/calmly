import React from 'react';

function Sounds (props) {
    return (
        <div className="sounds-panel">
        {props.sounds.map((sound) =>
        
            <button 
                onClick={() => {
                    props.handleSound(sound.listen, sound.look)
                }}
            >{sound.name}</button>

        )}
        </div>
    )
}

export default Sounds;