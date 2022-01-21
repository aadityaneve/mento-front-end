import './App.css';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllTopics, getAllTopicsDetails } from './features/actions';
import Midpart from './components/Midpart/Midpart';
import AllTopics from './components/AllTopics/AllTopics';
import Midtextbox from './components/Midtextbox/Midtextbox';
import Videobox from './components/Videobox/Videobox';

function App() {
    const { allTopics, allTopicsDetails } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopics());
        dispatch(getAllTopicsDetails());
    }, []);

    return (
        <div className='App'>
        </div>
    );
}

export default App;
