import React, { useState } from 'react';
import db from './firebase.js';
import { addDoc, collection } from 'firebase/firestore';
import logo from './logo.svg';
import './App.css';
import { IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';

function Home() {
    const [url, setUrl] = useState('');
    Array.prototype.random = function () {
        return this[Math.floor(Math.random() * this.length)];
    };
    function toTitleCase(str) {
        if (!str) {
            return '';
        }
        const strArr = str.split(' ').map((word) => {
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        });
        return strArr.join(' ');
    }
    const words = require('categorized-words');
    const adjectives = words.A;
    const nouns = words.N;
    const selectedAdjective = adjectives.random();
    const selectedNoun = nouns.random();
    let code = `${toTitleCase(selectedAdjective)}${toTitleCase(selectedNoun)}`;
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'urls'), {
            url: url,
            code: code,
        });

        alert(`This is your URL - https://DinkyL.ink/${code}`);
    };
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Lets make your links dinky</p>
                <form onSubmit={handleFormSubmit}>
                    <div className="home_container">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://example.com/"
                        />
                        <IconButton>
                            <Send type="submit" />
                        </IconButton>
                    </div>
                </form>
            </header>
        </div>
    );
}

export default Home;
