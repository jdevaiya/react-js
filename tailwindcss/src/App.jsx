import { useState } from 'react'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-black text-white p-4 rounded-xl '>Tailwind test</h1>
      <Card />
    </>
  )
}

export default App