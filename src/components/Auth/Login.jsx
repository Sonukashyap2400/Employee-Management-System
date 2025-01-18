import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='bg-gray-800 rounded-xl shadow-xl p-8'>
        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold text-white'>Login</h1>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-lg text-gray-300 mb-2'>Email</label>
            <input
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='rounded-md border border-gray-700 bg-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500'
              type="email"
              placeholder='Enter your email'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='text-lg text-gray-300 mb-2'>Password</label>
            <input
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='rounded-md border border-gray-700 bg-gray-700 text-white px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500'
              type="password"
              placeholder='Enter password'
            />
          </div>
          <button className='bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-md px-4'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login