import React, { useState, useEffect } from 'react';
import Users from './components/Users/UsersHooks';
import Toggle from './components/Toggle/ToggleFuncional';

export default function App() {

  const [users, setUsers] = useState([])
  const [showUsers, setShowUsers] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://randomuser.me/api/?seed=rush&nat=br&results=10')
      const json = await res.json();
      setUsers(json.results)
    }

    fetchUsers()

  }, [])

  const handleShowUsers = (isChecked) => {
    setShowUsers(isChecked)
  }

  return (
    <div>
      <Toggle label="Mostrar usuários" enabled={showUsers} onToggle={handleShowUsers} />
      <hr />
      <div>
        {showUsers && <Users users={users} />}
      </div>
    </div>
  );

}
