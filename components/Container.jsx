import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card.jsx';
import SearchForm from './SearchForm.jsx'

export default class ContainerDiv extends React.Component{
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this);
        this.state = {
            logins: []
        };
    }

    addCard(login) {
        let component = this;
        this.setState({logins: component.state.logins.concat(login)});
    }

    render() {
        let cardId = 1;
        let cards = this.state.logins.map(function (login) {
            return <Card id = {cardId++} login={login} />
        });
        return <div className="row">
            <h3>Search by github name</h3>
            <SearchForm addCard={this.addCard}/>
            <div>
                {cards}
            </div>
        </div>;
    }
}

ReactDOM.render(
    <ContainerDiv/>,
    document.getElementById('container')
);