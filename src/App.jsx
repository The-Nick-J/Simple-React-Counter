import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        const str = time.toString();
        return '0'.repeat(6 - str.length) + str;
    }

    const timeStr = formatTime(time);

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="container bg-dark text-white p-5">
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center justify-content-center p-2 bg-secondary shadow rounded" style={{ minWidth: '120px', fontSize: '90px'}}>
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    {timeStr.split('').map((digit, index) => (
                        <div key={index} className="d-flex align-items-center justify-content-center p-2 bg-secondary shadow rounded" style={{ minWidth: '120px', fontSize: '90px'}} >
                            {digit}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;