import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    toggleLogo,
    logoImg,
    toolbarColor,
    toolbarLink,
    toggleSidebar,
    sidebarLink,
    sidebarColor,
    heroColor, heroDirection
} from "../themes";

const Modal = () => {
    const themes = useSelector(state => state.themes.value)
    const dispatch = useDispatch()
    const url = useRef()
    const color = useRef()
    const newToolbarLink = useRef()
    const newSidebarLink = useRef()
    const newSidebarColor = useRef()
    const newHeroColor = useRef()


    function displayLogo () {
        dispatch(toggleLogo(!themes.toggleLogo))
    }

    function changeLogoUrl () {
        const newUrl = url.current.value
        dispatch(logoImg(newUrl))
        url.current.value = ''
    }

    function changeColor () {
        const newClr = color.current.value
        dispatch(toolbarColor(newClr))
        color.current.value = ''
    }

    function addToolbarLink () {
        const newLink = newToolbarLink.current.value
        dispatch(toolbarLink(newLink))
        newToolbarLink.current.value = ''
    }

    function displaySidebar () {
        dispatch(toggleSidebar(!themes.toggleSidebar))
    }

    function addSidebarLink () {
        const newLink = newSidebarLink.current.value
        dispatch(sidebarLink(newLink))
        newSidebarLink.current.value = ''
    }

    function changeSidebarColor () {
        const newColor = newSidebarColor.current.value
        dispatch(sidebarColor(newColor))
        newSidebarColor.current.value = ''
    }

    function changeHeroColor () {
        const newColor = newHeroColor.current.value
        dispatch(heroColor(newColor))
        newHeroColor.current.value = ''
    }

    function changeHeroDirection () {
        dispatch(heroDirection(!themes.heroDirection))
    }

    return (
        <div className='modalWrap'>
            <div className="grow1 logoToolbar d-flex-center">
                <h2>Logo in toolbar</h2>
                <button onClick={displayLogo} style={{backgroundColor: themes.toggleLogo ? 'green' : 'red'}}>Toggle</button>
            </div>
            <div className="grow1 logoToolbar d-flex-center">
                <h2>Logo img:</h2>
                <input type="text" placeholder='URL' ref={url} onKeyDown={event => {
                    if (event.key === 'Enter') {
                        changeLogoUrl()
                    }
                }}/>
            </div>
            <div className="grow1 logoToolbar d-flex-center">
                <h2>Toolbar color:</h2>
                <input type="text" placeholder='color' ref={color} onKeyDown={event => {
                    if (event.key === 'Enter') {
                        changeColor()
                    }
                }}/>
            </div>
            <div className="grow1 logoToolbar d-flex-center">
                <h2>Add toolbar links:</h2>
                <input type="text" placeholder='Link name' ref={newToolbarLink} onKeyDown={event => {
                    if (event.key === 'Enter') {
                        addToolbarLink()
                    }
                }}/>
            </div>
            <div className="grow1 logoToolbar d-flex-center">
                <h2>Display sidebar</h2>
                <button onClick={displaySidebar} style={{backgroundColor: themes.toggleSidebar ? 'green' : 'red'}}>Toggle</button>
            </div>
            <div className="grow1 logoToolbar d-flex-center">
                <h2>Add sidebar links:</h2>
                <input type="text" placeholder='Link name' ref={newSidebarLink} onKeyDown={event => {
                    if (event.key === 'Enter') {
                        addSidebarLink()
                    }
                }}/>
            </div>
            <div className="grow1 logoToolbar d-flex-center">
                <h2>Sidebar color:</h2>
                <input type="text" placeholder='color' ref={newSidebarColor} onKeyDown={event => {
                    if (event.key === 'Enter') {
                        changeSidebarColor()
                    }
                }}/>
            </div>
            <div className="grow1 logoToolbar d-flex-center">
                <h2>Hero color:</h2>
                <input type="text" placeholder='color' ref={newHeroColor} onKeyDown={event => {
                    if (event.key === 'Enter') {
                        changeHeroColor()
                    }
                }}/>
            </div>
            <div className="grow1 logoToolbar d-flex-center">
                <h2>Hero content direction</h2>
                <button onClick={changeHeroDirection} style={{backgroundColor: themes.heroDirection ? 'green' : 'red'}}>Toggle</button>
            </div>
        </div>
    );
};

export default Modal;