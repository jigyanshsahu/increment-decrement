import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)

  return (
    <div className="center-container">
      {num === 10 ? (
        <h1> Happy Diwali  </h1>
      ) : num === -10 ? (
        <h1>Send Me Your Hot Pic🥵</h1>
      ) : (
        <>
          <h1>Number is {num}</h1>
          <button onClick={() => setnum(num + 1)}>increment</button>
          <button onClick={() => setnum(num - 1)}>decrement</button>
        </>
      )}
    </div>
  )
}

export default App
