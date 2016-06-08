import React from 'react';

export default class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleSubmit(e) {
        e.defaultPrevented();
        let loginInput = React.findDOMNode(this.refs.login);
        console.log(loginInput);
        this.props.addCard(loginInput.value);
        loginInput.value = '';
    }

    render() {
        return <form onsubmit={this.handleSubmit}>
            <input placeholder="GitHub login" ref="login"/>
            <button>GO</button>
        </form>;
    }
}

