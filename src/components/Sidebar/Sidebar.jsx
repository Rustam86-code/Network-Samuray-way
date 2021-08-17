import React from 'react';
import s from './Sidebar.module.css';

const sidebar = (props) => {
    let sidebarElements = props.stateSidebar.sidebar.map();

    return (
        <div className={s.item}>
            <div>
                Friends
            </div>
            {sidebarElements}
        </div>


    )
}
export default sidebar;