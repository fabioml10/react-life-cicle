import React, { useState, useEffect } from 'react'
import Card from '../Card/CardFuncional'

export default function Users({ users }) {

  const [secondsVisible, setSecondsVisible] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setSecondsVisible(secondsVisible + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [secondsVisible])

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
