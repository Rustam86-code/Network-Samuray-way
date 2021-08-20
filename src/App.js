import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Profile from './components/Profile/Profile';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Sidebar from './components/Sidebar/Sidebar';
import ConteinerDialogs from "./components/Dialogs/ContenerDialogs";

const App = (props) => {
debugger;
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=> <Profile stateProfile={props.state} />}/>
                    <Route path='/dialogs' render={()=> <ConteinerDialogs stateDialogs={props.state} />}/>
                    <Route path='/news' component={News}/>
                    <Route path='settings' component={Settings}/>
                    <Route path='music' component={Music}/>
                    <Route path='/sidebar' render={()=> <Sidebar stateSidebar={props.store}/>}/>
                </div>
            </div>
    );
}
export default App;
