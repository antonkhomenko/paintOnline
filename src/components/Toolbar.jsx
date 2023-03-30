import React from 'react';
import '/src/styles/toolbar.scss'
import ToolbarBtn from "./UI/ToolbarBtn.jsx";


const btns = [
    "brush",
    "rect",
    "circle",
    "eraser",
    "line",
    "colorpicker",
    "undo",
    "redo",
    "save",
]

const Toolbar = () => {
    return (
        <div className={'toolbar'}>
            {btns.map(b => <ToolbarBtn name={b}/>)}
        </div>
    );
};

export default Toolbar;