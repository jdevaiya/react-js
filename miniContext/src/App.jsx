import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Hy my name is Jayendra, how are you?</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
