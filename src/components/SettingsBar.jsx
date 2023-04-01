import React from 'react';

const SettingsBar = () => {
    return (
        <div className="settings-bar">
            <input type="number" min={0} max={50}/>
        </div>
    );
};

export default SettingsBar;