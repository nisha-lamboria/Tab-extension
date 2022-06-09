
import './App.css';
import './utils.css';
import { Home } from './components/Home';
import { WelcomeUser } from './components/WelcomeUser';
import { useUserContext } from './context/userContext';

function App() {
  const {userName}=useUserContext();
  return (
    <div className="App">
      {(userName)?<Home/>:<WelcomeUser/>}
    </div>
  );
}

export default App;
