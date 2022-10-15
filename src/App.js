import './App.css';
import { store } from './store/store';

function App() {
  store.subscribe(() => console.log(store.getState()));

  return (
    <></>
  );
}

export default App;
