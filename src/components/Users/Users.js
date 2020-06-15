import React, { Component } from 'react'
import Card from '../Card/Card'

export default class Users extends Component {
  constructor() {
    super()
    this.state = {
      secondsVisible: 0
    }
    this.interval = null
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { secondsVisible } = this.state
      this.setState({
        secondsVisible: secondsVisible + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log("did unmount users")
    clearInterval(this.interval)
  }
  render() {
    const { users } = this.props
    const { secondsVisible } = this.state

    return (
      <div>
        <p>Componente visivel por {secondsVisible} segundos.</p>

        <div className="row">
          <ul>
            {users.map(({ name, picture }, index) => <li key={index}><Card image={picture.large} firstname={name.first} lastname={name.last} /></li>)}
          </ul>
        </div>

      </div>
    )
  }
}
