import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [sentence, setSentence] = useState('')

  useEffect(() => {
    axios.get('https://api.hatchways.io/assessment/sentences/1')
      .then(res => {
        setSentence(res.data.data.sentence)
      })
      .catch(err => {
        return console.log(err)
      })
  }, [])

  const newSentence = sentence.split(' ').forEach((words, i) => {
    const letters = words.split('').slice(1, -1)
  
    // if(letters !== undefined){
    //   letters.map((letter, i) =>{
    //     console.log(letter)
    //   })
    // }
  
    
  })
  console.log(newSentence)
  

  return (
    <div className="App">
      <h1 className='scambled-word'>
        {sentence}
      </h1>

    </div>
  );
}

export default App;
