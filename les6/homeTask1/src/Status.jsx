import React, { Component } from 'react';
import Offline from './Offline.jsx';
import Online from './Online.jsx';

const Status = ({ isOnline }) => (isOnline ? <Online/> : <Offline/>);

export default Status;