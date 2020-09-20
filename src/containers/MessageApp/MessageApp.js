import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import MessageList from '../../components/MessageList/MessageList';
import MessageForm from '../../components/MessageForm/MessageForm';
import Axios from 'axios';

class MessageApp extends Component {
    state = {
        message: "",
        messageList: [],
        messages: {}
    }

    changeMessage = e => {
        console.log("newMessage", e.target.value);
        this.setState({
            message: e.target.value
        });
    }

    submitMessage = () => {
        if (this.state.message === "") {
            alert("Invalid input");
            return;
        }
        const data = {
            message: this.state.message
        };
        Axios.post(`/api/messages/`, data)
            .then(response => {
                const messages = { ...this.state.messages };
                messages[response.data.data.id] = {
                    "message": this.state.message,
                    "isPalindrome": null
                };
                this.setState({
                    messages: messages
                });
                this.setState({
                    message: ""
                });
            });
    }

    findPalindrome = key => {
        Axios.get(`/api/message/${key}/palindrome/`)
            .then(response => {
                console.log(response.data.data);
                const messages = { ...this.state.messages };
                messages[key] = {
                    message: messages[key].message,
                    isPalindrome: response.data.data.is_palindrome
                };
                this.setState({
                    messages: messages
                });
            });
    }

    componentDidMount() {
        Axios.get(`/api/messages/`)
            .then(response => {
                const messageList = response.data.data.message_list;
                if (messageList === null) {
                    return
                }
                const messages = messageList.reduce(
                    (map, data) => {
                        map[data.id] = {
                            "message": data.message,
                            "isPalindrome": null
                        };
                        return map;
                    }, {});
                console.log(messages);
                this.setState({
                    messages: messages
                });
            });
    }

    render() {
        return (
            <Aux>
                <MessageForm
                    message={this.state.message}
                    submitted={this.submitMessage}
                    changed={this.changeMessage} />
                <MessageList
                    messages={this.state.messages}
                    findPalindrome={this.findPalindrome} />
            </Aux>
        );
    }
}

export default MessageApp;