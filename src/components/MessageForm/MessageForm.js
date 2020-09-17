import React, { Component } from 'react';
import withClass from '../../hoc/WithClass';
import Aux from '../../hoc/Aux';
import classes from './MessageForm.css';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        return (
            <Aux classes={classes.MessageForm}>
                <div>Post a message</div>
                <input
                    ref={this.inputElementRef}
                    type="text"
                    onChange={e => this.props.changed(e)}
                    value={this.props.message} />
                <button onClick={this.props.submitted}>Submit</button>
            </Aux>
        );
    }
}

export default withClass(MessageForm, classes.MessageForm);