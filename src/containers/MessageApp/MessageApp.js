import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import MessageList from '../../components/MessageList/MessageList';
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
        this.setState({
            messageList: [...this.state.messageList,
            { id: 1, message: this.state.message }]
        });
        this.setState({
            message: ""
        });
    }

    render() {
        return (
            <Aux>
                <MessageForm
                    message={this.state.message}
                    submitted={this.submitMessage}
                    changed={this.changeMessage} />
                <MessageList messages={this.state.messageList} />
            </Aux>
        );
    }
}

export default MessageApp;