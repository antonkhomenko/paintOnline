import React from 'react';
import toolState from "../store/toolState.js";

const SettingsBar = () => {
    return (
        <div className="settings-bar">
            <label htmlFor="line-width" style={{marginLeft: '10px'}}>Line width:</label>
            <input
                type="number"
                min={1} max={50}
                defaultValue={1} id="line-width"
                style={{margin: '0 10px'}}
                onChange={e => toolState.setLineWidth(e.target.value)}
            />
        </div>
    );
};

export default SettingsBar;