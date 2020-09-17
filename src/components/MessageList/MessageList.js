import React, { Component } from 'react';
import withClass from '../../hoc/WithClass';
import Aux from '../../hoc/Aux';
import classes from './MessageList.css';

class MessageList extends Component {
    render() {
        return (
            <Aux>
                {
                    this.props.messages.map(
                        (message) => <div>{message.id} - {message.message}</div>
                    )
                }
            </Aux>
        );
    }
}

export default withClass(MessageList, classes.MessageList);