import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import MessageForm from '../../components/MessageForm/MessageForm';

class MessageApp extends Component {
    state = {
        message: "",
        messageList: []
    }

    changeMessage = e => {
        console.log("newMessage", e.target.value);
        this.setState({
            message: e.target.value
        });
    }

    submitMessage = () => {
        console.log(this.state);
    }

    render() {
        return (
            <Aux>
                <MessageForm
                    submitted={this.submitMessage}
                    changed={this.changeMessage} />
                {/* <MessageList /> */}
            </Aux>
        );
    }
}

export default MessageApp;