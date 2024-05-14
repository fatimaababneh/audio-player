import React, { useState } from 'react';

export const AudioPlayer = () => {
    const [audioSrc, setAudioSrc] = useState(null);

    const handleAudioUpload = event => {
        const file = event.target.files[0];
        if (file) {
            const audioUrl = URL.createObjectURL(file);
            setAudioSrc(audioUrl);
        }
    };

    return (
        <div>
            <input type="file" accept="audio/*" onChange={handleAudioUpload} />
            {audioSrc && <audio controls src={audioSrc} />}
        </div>
    );
};