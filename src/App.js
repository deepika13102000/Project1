import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import TrackingScreen from './TrackingScreen';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/tracking" element={<TrackingScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
