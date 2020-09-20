import React from 'react';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import classes from './Message.css';

const message = props => {
    let child = null;
    let childClasses = [classes.Pal];
    if (props.isPalindrome === null) {
        child = <button
            className={classes.Button}
            onClick={e => props.clicked(props.id)}>
            Is it a palindrome?
        </button>
    } else if (props.isPalindrome === true) {
        child = "It is a Palindrome";
        childClasses = [...childClasses, classes.True, classes.AlignCenter]
    } else {
        child = "It is not Palindrome";
        childClasses = [...childClasses, classes.False, classes.AlignCenter]
    }

    return (
        <Aux>
            <span className={classes.Child}>{props.message}</span>
            <div className={childClasses.join(" ")}>{child}</div>
            <button className={classes.DeleteButton} onClick={e => props.deleted(props.id)}>Delete</button>
        </Aux>
    )
}


export default withClass(message, classes.Message);