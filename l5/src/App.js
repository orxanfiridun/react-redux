import Main from './components/Main/Main'
import './App.css'
import { Provider } from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
