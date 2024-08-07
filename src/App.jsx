import React from 'react'
import Background from './components/Background';
import Foreground from './components/Foreground';

function App() {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
      <Background/>
      <Foreground/>

    </div>
  )
}

export default App