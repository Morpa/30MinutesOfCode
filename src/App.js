import { useEffect, useState } from 'react'
import { http } from './services/api'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    http.get('/users').then(response => setUsers(response.data))
   }, [])

  return (
    <div>{JSON.stringify(users)}</div>
  );
}

export default App;
