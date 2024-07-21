import React, { useState, useEffect } from 'react';
import AnalogClock from './AnalogClock';
import SpeedControl from './SpeedControl';
import ShareButton from './ShareButton';

function TrackingScreen() {
    const [speed, setSpeed] = useState(1);
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        setStartDate(new Date());
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <AnalogClock speed={speed} />
            <SpeedControl speed={speed} onChange={setSpeed} />
            <ShareButton speed={speed} date={startDate} />
        </div>
    );
}

export default TrackingScreen;