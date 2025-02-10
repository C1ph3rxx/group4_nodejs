import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  const add = ():void => {
    return setCount((prev) => prev + 1);
  }

  const subtract = ():void => {
    return setCount((prev) => {
      return prev < 1 ? prev : prev -1
    })
  }



/* #root {
  width: 100%;
  margin: 0 auto;

  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}
 */

  return (
    <div className='w-full h-full text-center m-auto bg-[#242424]'>
     <Navbar />
      <div className='flex w-full'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 p-6" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 p-6" alt="React logo" />
        </a>
      </div>
      <h1 className='text-red-500'>Vite + React</h1>
      <div className="p-8">
        <button onClick={add} >+</button>
        <span>
          count is {count}
        </span>
        <button onClick={subtract}>-</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-green-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
