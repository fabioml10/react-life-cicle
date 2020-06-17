import React from 'react'

export default function Toggle(props) {

  const hadleChange = (e) => {
    const { onToggle } = props
    const isChecked = e.target.checked
    onToggle(isChecked)
  }

  const { label, enabled } = props
  return (
    <div>
      <div className="switch">
        <label>
          {label}
          <input type="checkbox" checked={enabled} onChange={hadleChange} />
          <span className="lever"></span>
        </label>
      </div>
    </div>
  )
}
