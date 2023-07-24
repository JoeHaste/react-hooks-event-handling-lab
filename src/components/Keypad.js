import React from 'react';

function Keypad () {
    function changehandler() {
        console.log("Entering password...")
    }
    return (
        <div>
            <input type='password' onChange={changehandler} />
        </div>
    )
}

export default Keypad;