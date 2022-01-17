
import './App.css';
import { UseConextProvider } from './context/useContext';
import { UseproviderInternet } from './context/useContextInternet';
import Main from '../src/components/Main'


function App() {
  return (
    <div className="App">
      <UseConextProvider>
        <UseproviderInternet>
           <Main />
         </UseproviderInternet>
      </UseConextProvider>
    </div>
  );
}

export default App;
