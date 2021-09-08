import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import ConteinerDialogs from "./components/Dialogs/ContenerDialogs";
import ConteinerUsers from './components/Users/ConteinerUsers';

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=> <Profile stateProfile={props.state} />}/>
                    <Route path='/dialogs' render={()=> <ConteinerDialogs />}/>
                    <Route path='/ConteinerUsers' render={()=> <ConteinerUsers />}/>
                    <Route path='/news' render={News}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/sidebar' render={()=>
                        <Sidebar stateSidebar={props.state}/>}/>
                </div>
            </div>
    );
}
export default App;
