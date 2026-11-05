import LoginButton from './components/LoginButton'
import 'normalize.css'
import './App.css'
import ListingsLink from './components/ListingsLink';
import { Link } from 'react-router';

function App() {
  return (
    <>
      <nav>
        <h1>Troc et vente entre étudiants</h1>
        <Link to="/">Accueil</Link>
        <ListingsLink />
        <LoginButton />
      </nav>
    </>
  )
}

export default App
