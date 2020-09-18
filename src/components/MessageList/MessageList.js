import React from 'react';
import Message from './Message/Message';
import withClass from '../../hoc/WithClass';
import Aux from '../../hoc/Aux';
import classes from './MessageList.css';

const messageList = props => (
    <Aux>
        {
            Object.keys(props.messages).map(
                (key) =>
                    <Message
                        key={key}
                        id={key}
                        message={props.messages[key].message}
                        isPalindrome={props.messages[key].isPalindrome}
                        clicked={props.findPalindrome} />
            )
        }
    </Aux>
)

export default withClass(messageList, classes.MessageList);