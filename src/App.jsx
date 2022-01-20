import './App.css';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllTopics, getAllTopicsDetails } from './features/actions';
import FooterBox from './components/FooterBox/FooterBox';
import FooterTop from './components/Footertop/FooterTop';
function App() {
    const { allTopics, allTopicsDetails } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopics());
        dispatch(getAllTopicsDetails());
    }, []);

    return (
        <div className='App'>
            <FooterTop />
            <FooterBox />
        </div>
    );
}

export default App;
