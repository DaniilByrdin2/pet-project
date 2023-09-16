import React from 'react';
import {NavLink} from 'react-router-dom';

import c from './Header.module.css';

import logo from './img/logo-transformed.png'; 
import anonumys from './img/anonumys.avif'




const Header = (props)=> {
    const { login } = props.userData.Authentification;

    const FnRenderPhoto = () => {
        return (
            <>
                <div className={c.spanLogo}>Welcome to SocialHub, 
                    <span>{ login }</span>
                    { props.userData.photoSmall ? <img className={ c.userPhoto } src={ props.userData.photoSmall } alt="photo" /> 
                    : <img src={ anonumys } className={ c.userPhoto } alt="anonumys" /> }
                </div>
                <button  onClick={props.thunkLogOutUser} className={c.gradientButton}>Выйти</button> 
            </> 
        )
    }

    return (
        <div className={c.header_main}>
            <img className={c.img_header} src={logo} alt="header-logo" />
            { props.userData.Authentification.isAuth ? 
            <FnRenderPhoto /> : <div className={c.login_Block}><NavLink to={'/login'}>Login</NavLink></div> }
        </div>
    );
}
export default Header;