import c from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

// подкомпонента пользователя кот прислал сообщение
const DialogItem = (props)=> {
    let path = '/Dialogs/' + props.id;
    return (
        <div className={c.dialog}>
            <NavLink activeClassName={c.activeLink} to={path}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;