import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Sidebar = () => {
    const dispatch = useDispatch()
    const themes = useSelector(state => state.themes.value)
    return (

        <div className='sideBarWrap' style={{display: themes.toggleSidebar ? 'flex' : 'none', backgroundColor: themes.sidebarColor}}>
            {themes.sidebarLink.map((x, i) =>
                <div className="grow1 sideBarLink">
                    <h2 key={i}><a href="">{x}</a></h2>
                </div>
            )}

        </div>
)
    ;
};

export default Sidebar;