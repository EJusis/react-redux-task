import React from 'react';
import {useSelector} from "react-redux";

const Hero = () => {

    const themes = useSelector(state => state.themes.value)

    return (
        <div className='heroWrap' style={{backgroundColor: themes.heroColor, flexDirection: themes.heroDirection? 'column' : 'row'}}>
            <div className="grow1 heroContent"/>
            <div className="grow1 heroContent"/>
            <div className="grow1 heroContent"/>
        </div>
    );
};

export default Hero;