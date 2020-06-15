import React, { Component } from 'react'

export default class Toggle extends Component {

  hadleChange = (e) => {
    const { onToggle } = this.props
    const isChecked = e.target.checked
    onToggle(isChecked)
  }

  render() {
    const { label, enabled } = this.props
    return (
      <div>
        <div className="switch">
          <label>
            {label}
            <input type="checkbox" checked={enabled} onChange={this.hadleChange} />
            <span className="lever"></span>
          </label>
        </div>
      </div>
    )
  }
}
