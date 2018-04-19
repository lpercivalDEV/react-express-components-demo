import React, { Component } from 'react';
import './Name.css';

class Name extends Component {
  state = {name: []}

  componentDidMount() {
    fetch('/api/messages',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(res => res.json())
      .then(name => this.setState({ name }));
  }

  render() {

    const style = {
      backgroundColor: this.props.color,
      width: this.props.width
    }

    return (
      <div>
        <h1>User Names</h1>
        {this.state.name.map(user =>
          <div className="Name" style={style} key={user.name}>{user.name}</div>
        )}
      </div>
    );
  }
}

export default Name;
