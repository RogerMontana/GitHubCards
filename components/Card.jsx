import React from 'react';
import $ from "jquery";

export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Noname",
            avatar_url: "http://github-jobs.s3.amazonaws.com/aa333d4e-adeb-11e2-9d28-44d170059efd.png"
        };
    }

    componentDidMount() {
        let component = this;
        $.get("http://api.github.com/users/" + this.props.login, function(data){
            component.setState(data);
        });
    }

    render() {
        return <div>
            <img src={this.state.avatar_url} width="80"/>
            <h3>{this.state.name}</h3>
            <hr/>
        </div>;
    }
}

