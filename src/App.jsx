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
    const { allTopics, allTopicsDetails } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopics());
        dispatch(getAllTopicsDetails());
    }, []);

    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/allTopics' element={<AllTopics />} />
                <Route exact path='/topicDetails' element={<TopicDetails />} />
                <Route exact path='/about' element={<About />} />
                <Route
                    exact
                    path='/profile'
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
