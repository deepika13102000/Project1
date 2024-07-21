import React from 'react';

function SpeedControl({ speed, onChange }) {
    return (
        <div style={{ margin: '20px 0' }}>
            <input
                type="range"
                min="1"
                max="10"
                value={speed}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{ width: '80%' }}
            />
            <div>Speed: {speed}</div>
        </div>
    );
}

export default SpeedControl;