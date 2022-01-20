import './App.css';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllTopics, getAllTopicsDetails } from './features/actions';
import TopicCard from './components/TopicCard/TopicCard';
import AllTopics from './components/AllTopics/AllTopics';
import {Profile} from './components/Profile/Profile'

function App() {
    const { allTopics, allTopicsDetails } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopics());
        dispatch(getAllTopicsDetails());
    }, []);

    return (
        <div className='App'>
            <AllTopics />
            {/* <Profile/> */}
        </div>
    );
}

export default App;
