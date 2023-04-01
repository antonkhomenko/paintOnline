import React from 'react';
import '/src/styles/toolbar.scss'
import toolState from "../store/toolState.js";
import Brush from "../tools/Brush.js";
import canvasState from "../store/canvasState.js";
import Rect from "../tools/Rect.js";
import Circle from "../tools/Circle.js";
import Eraser from "../tools/Eraser.js";
import Line from "../tools/Line.js";

const Toolbar = () => {


    const changeColor = (e) => {
            toolState.setStrokeColor(e.target.value);
            toolState.setFillColor(e.target.value);
    }

    return (
        <div className={'toolbar'}>
            <button
                className="toolbar__btn brush"
                onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
            />
            <button
                className="toolbar__btn rect"
                onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
            />
            <button
                className="toolbar__btn circle"
                onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
            />
            <button
                className="toolbar__btn eraser"
                onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
            />
            <button
                className="toolbar__btn line"
                onClick={() => toolState.setTool(new Line(canvasState.canvas))}
            />
            <input
                type="color" style={{marginLeft: '10px'}}
                onChange={changeColor}
            />

            <button
                className="toolbar__btn undo"
                onClick={() => canvasState.undo()}
            />
            <button
                className="toolbar__btn redo"
                onClick={() => canvasState.redo()}
            />
            <button className="toolbar__btn save"/>
        </div>
    );
};

export default Toolbar;