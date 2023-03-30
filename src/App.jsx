import React from 'react';
import './styles/app.scss';
import Toolbar from "./components/Toolbar.jsx";
import SettingsBar from "./components/SettingsBar.jsx";
import Canvas from "./components/Canvas.jsx";

const App = () => {
    return (
        <div className={'app'}>
            <Toolbar/>
            <SettingsBar/>
            <Canvas/>
        </div>
    );
};

export default App;