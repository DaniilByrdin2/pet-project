import c from './Nav.module.css';
import { NavLink } from "react-router-dom";

const Nav = ()=> {
    return (
        <div className={c.Nav_Container}>
            <div className={c.Nav_div}>
                <div className={c.link}>
                    <NavLink to='/Profile' activeClassName={c.activeLink}>Профиль</NavLink>
                </div>
                <div className={c.link}>
                    <NavLink to='/Dialogs' activeClassName={c.activeLink}>Сообщения</NavLink>
                </div>
                <div className={c.link}>    
                    <NavLink to='/mmmm' activeClassName={c.activeLink}>Лента</NavLink>
                </div>
                <div className={c.link}>
                    <NavLink to='/Friends' activeClassName={c.activeLink}>Друзья</NavLink>
                </div>
                <div className={c.link}>
                    <NavLink to='/mmmm3' activeClassName={c.activeLink}>Музыка</NavLink>
                </div>
                <div className={c.link}>
                    <NavLink to='/mmmm4' activeClassName={c.activeLink}>Настройки</NavLink>
                </div>
            </div>
        </div>
    );
}
export default Nav;