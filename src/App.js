import { React } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import GoLink from './GoLink.js';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:code" element={<GoLink />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
