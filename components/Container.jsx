import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card.jsx';
import SearchForm from './SearchForm.jsx'

export default class ContainerDiv extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            logins: ["RogerMontana", "lol", "dummyUserName100Precent"]
        };
    }

    addCard(login) {
        console.log(login);
        this.setState({logins: this.state.logins.concat(login)});
    }

    render() {
        let cards = this.state.logins.map(function (login) {
            return <Card login={login} />
        });
        return <div>
            <p>HELLO THERE</p>
            <SearchForm addCard={this.addCard}/>
            {cards}
        </div>;
    }
}

ReactDOM.render(
    <ContainerDiv/>,
    document.getElementById('container')
);