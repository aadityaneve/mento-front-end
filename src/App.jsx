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
                <Home />
                <Route path='/' element={<Home />}></Route>
                <Route path='/allTopics' element={<AllTopics />}></Route>
                <Route path='/topicDetails' element={<TopicDetails />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route
                    path='/profile'
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                ></Route>
            </Routes>
            <FooterTop />
            <FooterBottom />
        </div>
    );
}

export default App;
