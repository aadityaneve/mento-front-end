import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getAllTopics, getAllTopicsDetails } from './features/actions';
import Home from './components/Home/Home';
import AllTopics from './components/AllTopics/AllTopics';
import Navbar from './components/Navbar/Navbar';
import FooterTop from './components/Footer/FooterTop';
import FooterBottom from './components/Footer/FooterBottom';
import About from './components/About/About';
import { Profile } from './components/Profile/Profile';
import TopicDetails from './components/TopicDetails/TopicDetails';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

function App() {
    // const { allTopics, allTopicsDetails } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopics());
        dispatch(getAllTopicsDetails());
    }, []);

    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route exact path='/mento-front-end' element={<Home />} />
                <Route path='mento-front-end/allTopics' element={<AllTopics />} />
                <Route path='mento-front-end/topicDetails' element={<TopicDetails />} />
                <Route path='mento-front-end/about' element={<About />} />
                <Route
                    path='mento-front-end/profile'
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
            </Routes>
            <FooterTop />
            <FooterBottom />
        </div>
    );
}

export default App;
