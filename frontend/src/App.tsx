import LoginButton from './components/LoginButton'
import 'normalize.css'
import './App.css'
import ListingsLink from './components/ListingsLink';

function App() {
  return (
    <>
      <nav>
        <h1>Troc et vente entre étudiants</h1>
        <ListingsLink />
        <LoginButton />
      </nav>
    </>
  )
}

export default App
