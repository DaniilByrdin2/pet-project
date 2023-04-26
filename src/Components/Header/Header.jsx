import c from './Header.module.css';
import logo from './img/logoSocial-app-bz.png';
import {NavLink} from 'react-router-dom';

const Header = (props)=> {
    return (
        <div className={c.header_main}>
            <img className={c.img_header} src={logo} alt="header-logo" />
            { props.userData.Authentification.isAuth ? 
                <span>
                    <span>Куки: </span>
                    {props.userData.Authentification.login}:
                    {props.userData.Authentification.email}
                </span> : 
                <div className={c.login_Block}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div> }
        </div>
    );
}
export default Header;