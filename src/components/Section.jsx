// Section.jsx
import { useEffect, useState } from 'react';
import { speech, voices } from '../speechService';
import '../App.css';

const Section = ({ text, setText }) => {
    const [selectedVoiceIndex, setSelectedVoiceIndex] = useState(0);

    useEffect(() => {
    }, []);

    const handleVoiceChange = (e) => {
        const index = parseInt(e.target.value, 10);
        setSelectedVoiceIndex(index);
        speech.voice = voices[index];
    };

    return (
        <div className="section-container">
            <textarea
                placeholder="write something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="section-buttons">
                <select value={selectedVoiceIndex} onChange={handleVoiceChange} onTouchStart={handleVoiceChange}>
                    {voices.map((voice, i) => (
                        <option key={i} value={i}>
                            {voice.name}
                        </option>
                    ))}
                </select>
                <button
                    className="btn-convert"
                    style={{ marginLeft: 20 }}
                    onClick={() => {
                        speech.text = text;
                        window.speechSynthesis.speak(speech);
                    }}
                >
                    Convert to Speech
                </button>
            </div>
        </div>
    );
};

export default Section;
