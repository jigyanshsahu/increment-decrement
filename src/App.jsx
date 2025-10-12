import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  return (
    <div className="center-container">
      {num === 10 ? (
        <h3>love you</h3>
      ) : (
        <>
          <h3>Number is {num}</h3>
          <button onClick={() => setnum(num + 1)}>increment</button>
          <button onClick={() => setnum(num - 1)}>decrement</button>
        </>
      )}
    </div>
  )
}

export default App
