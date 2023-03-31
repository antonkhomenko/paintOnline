import React from 'react';
import '/src/styles/toolbar.scss'
import ToolbarBtn from "./UI/ToolbarBtn.jsx";
import toolState from "../store/toolState.js";
import Brush from "../tools/Brush.js";
import canvasState from "../store/canvasState.js";

const Toolbar = () => {
    return (
        <div className={'toolbar'}>
            <button
                className="toolbar__btn brush"
                onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
            />
            <button className="toolbar__btn rect"/>
            <button className="toolbar__btn circle"/>
            <button className="toolbar__btn eraser"/>
            <button className="toolbar__btn line"/>
            <input type="color" style={{marginLeft: '10px'}}/>

            <button className="toolbar__btn undo"/>
            <button className="toolbar__btn redo"/>
            <button className="toolbar__btn save"/>
        </div>
    );
};

export default Toolbar;