import c from './../Dialogs.module.css';

// подкомпонента сообщения пользователя
const Message = (props)=> {

    return (
        <div className={c.wrapperDialods}>
            { 
                props.message.map( el => 
                    el.meSms ? <div className={c.messageMySms}>{el.textSms}</div> 
                    : <div>{el.textSms}</div> 
                )
            }
        </div>
    );
}

export default Message;




