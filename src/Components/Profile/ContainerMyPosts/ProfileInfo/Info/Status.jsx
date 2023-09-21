import React from "react";

import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';

import styles from './info.module.css';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    activateEditMode() {
        this.setState({
            editMode: true,
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    updateStatus = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode 
                    ? 
                    
                    <div className={ styles.activeChangeStatus }>
                        <input onChange={ this.updateStatus} autoFocus={true} onBlur={ this.deActivateEditMode.bind(this) } type="text" value={this.state.status} />
                        <div><CloseCircleOutlined /></div>
                    </div>
                    
                    :
                    <div className={ styles.status }>
                        <div>{this.state.status || 'установите статус'}</div>
                        <div onClick={ this.activateEditMode.bind(this) }>
                            <div className={ styles.statusEdit }><EditOutlined /></div>
                        </div>
                    </div> 
                    // <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.state.status || 'установите статус'}<EditOutlined /></span> 
                }
            </div>
        )
    }
}

export default Status;
