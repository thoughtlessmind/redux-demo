import logo from './logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Test change after new login</p>
      </div>
    </Provider>
  )
}

export default App
