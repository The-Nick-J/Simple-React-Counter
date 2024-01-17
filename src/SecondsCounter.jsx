import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const SecondsCounter = ({seconds}) => {
  return (
    <div className="d-flex align-items-center">
        <FontAwesomeIcon icon={faClock} />
        <span className="">{seconds}</span>
        </div>
  );
};

export default SecondsCounter;