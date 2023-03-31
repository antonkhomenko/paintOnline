import React, {useEffect, useRef} from 'react';
import '/src/styles/canvas.scss';
import {observer} from "mobx-react-lite";
import canvasState from "../store/canvasState.js";
import toolState from "../store/toolState.js";
import Brush from "../tools/Brush.js";


const Canvas = observer(() => {

    const canvasRef = useRef();

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current);
        toolState.setTool(new Brush(canvasRef.current))
    }, [])


    return (
        <div className="canvas">
            <canvas width={600} height={400} ref={canvasRef}/>
        </div>
    );
});

export default Canvas;