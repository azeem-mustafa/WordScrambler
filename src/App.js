import axios from 'axios';
import './App.css';

function App() {

  axios.get('https://api.hatchways.io/assessment/sentences/1').then(res => {
    console.log(res.data)
  })
  return (
    <div className="App">
     Hello
    </div>
  );
}

export default App;
