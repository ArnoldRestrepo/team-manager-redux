import { Provider } from "react-redux"
import store from "./store"
import Players from './components/Players'
import SelectedTeam from './components/SelectedTeam'


function App() {
  return (
    <Provider store={store}>
      <main className="App">
        <Players/>
        <SelectedTeam/>
      </main>
    </Provider>
  );
}

export default App;
