import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let loginInput = ReactDOM.findDOMNode(this.refs.login);
        console.log(loginInput);
        this.props.addCard(loginInput.value);
        loginInput.value = '';
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="small-10 columns">
                        <input type="text" placeholder="GitHub login" ref="login"/>
                </div>
                <div className="small-2 columns">
                    <button className="hollow button" >SEARCH</button>
                </div>
            </div>
        </form>;
    }
}


