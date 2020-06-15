import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const { image, firstname, lastname } = this.props
    return (
      <div className="card col s4">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={image} alt={firstname} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{firstname} {lastname}</span>
        </div>
      </div>
    )
  }
}
