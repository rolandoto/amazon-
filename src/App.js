
import './App.css';
import Main from './components/Main'
import { UseConextProvider } from './context/useContext';

function App() {
  return (
    <div className="App">
      <UseConextProvider>
         <Main />
      </UseConextProvider>
    </div>
  );
}

export default App;
