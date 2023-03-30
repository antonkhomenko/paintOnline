import React from 'react';

const ToolbarBtn = ({name}) => {

    const styleBtn = {
        background: `url('/src/assets/img/${name}.svg') no-repeat center center`,
        marginLeft: name === 'undo' && 'auto',
        marginRight: name === 'save' && '10px',
    }

    if(name === 'colorpicker') {
        return <input type="color" style={{marginLeft: '10px'}}/>
    }

    return (
        <button
            className="toolbar__btn"
            style={styleBtn}
        />
    )
};

export default ToolbarBtn;