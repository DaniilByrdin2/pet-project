import React from 'react';
import {NavLink} from 'react-router-dom';

import c from './Header.module.css';

import logo from './img/logo-transformed.png'; 
import anonumys from './img/anonumys.avif'

import { ButtonDashed, ButtonPrimary } from '../UI-Components/Button/Button'




const Header = (props)=> {
    const { login } = props.userData.Authentification;
    // console.log(props);

    const FnRenderPhoto = () => {
        return (
            <>
                <div className={c.spanLogo}>Welcome to SocialHub, 
                    <span>{ login }</span>
                    { props.userData.photoSmall ? <img className={ c.userPhoto } src={ props.userData.photoSmall } alt="photo" /> 
                    : <img src={ anonumys } className={ c.userPhoto } alt="anonumys" /> }
                </div>
                <div className={ c.btnDashedHeader }>
                    <ButtonDashed fn = { props.thunkLogOutUser } text = { 'Log Out' } />
                </div>
            </> 
        )
    }

    return (
        <div className={c.header_main}>
            <img className={c.img_header} src={logo} alt="header-logo" />
            { props.userData.Authentification.isAuth ? 
            <FnRenderPhoto /> : <div className={c.login_Block}><NavLink to={'/login'}> <ButtonPrimary text = { 'login' }/> </NavLink></div> }
        </div>
    );
}
export default Header;