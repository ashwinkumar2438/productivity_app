import './App.css';
import {Home,Header,headerChildren} from './components';

function App() {
  return (
    <div className="App">
      <Header {...headerChildren}/>
      <Home />
    </div>
  );
}




export default App;
