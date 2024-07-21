import React from 'react';

function ShareButton({ speed, date }) {
    const handleShare = () => {
        const url = `${window.location.origin}/tracking?speed=${speed}&start=${date.toISOString()}`;
        prompt("Share this URL:", url);
    };

    return (
        <button onClick={handleShare}>Share</button>
    );
}

export default ShareButton;