import React, { Component } from 'react';
import Users from './components/Users/Users';
import Toggle from './components/Toggle/Toggle';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      users: [],
      showUsers: false
    }
  }

  async componentDidMount() {
    console.log("Component Did Mount")
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    )
    const json = await res.json();

    this.setState({
      users: json.results
    })
  }

  handleShowUsers = (isChecked) => {
    this.setState({
      showUsers: isChecked
    })
  }
  render() {
    const { users, showUsers } = this.state
    return (
      <div>
        <Toggle label="Mostrar usuários" enabled={showUsers} onToggle={this.handleShowUsers} />
        <hr />
        <div>
          {showUsers && <Users users={users} />}
        </div>
      </div>
    );
  }
}
