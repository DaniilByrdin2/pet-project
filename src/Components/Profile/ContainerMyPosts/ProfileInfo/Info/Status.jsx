import React from "react";


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
                    ? <input onChange={ this.updateStatus} autoFocus={true} onBlur={ this.deActivateEditMode.bind(this) } type="text" value={this.state.status} />
                    : <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.state.status || 'установите статус'}</span> 
                }
            </div>
        )
    }
}

export default Status;
