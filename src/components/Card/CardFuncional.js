import React from 'react'

export default function Card(props) {

  const { image, firstname, lastname } = props
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
