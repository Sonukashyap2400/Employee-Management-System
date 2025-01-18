import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employeedashboard from './components/Dashboard/Employeedashboard'
import Admindashboard from './components/Dashboard/Admindashboard'
import { AuthContext } from './contex/Authprovider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid Credentials")
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <Admindashboard changeUser={setUser} /> : (user == 'employee' ? <Employeedashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}

export default App