import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Toolbar = () => {
    const dispatch = useDispatch()
    const themes = useSelector(state => state.themes.value)

    console.log(themes)

    return (
        <div className='toolbarWrap' style={{backgroundColor: themes.backgroundColor}}>
            {themes.toggleLogo && <img src={themes.logoUrl} alt=""/>
            }
            <div className='toolbarLinks'>
                {themes.toolbarLink.map((x, i) =>
                    <h2 key={i}><a href="">{x}</a></h2>
                )}
            </div>
        </div>
    );
};

export default Toolbar;