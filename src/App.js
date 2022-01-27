import axios from 'axios';
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [sentence, setSentence] = useState('')

  

  useEffect(() => {
    axios.get('https://api.hatchways.io/assessment/sentences/:counter')
      .then(res => {
        if (res.data){
          setSentence(res.data.data.sentence)
        }
      })
      .catch(err => {
        return console.log(err)
      })
  }, [])

  
    
    function scrambler (sentence){
      const words = sentence.split(' ')
      let result = []
      words.forEach((characters) =>{
        
        const character = characters.split('')
        const characterLength = character.length
        const firstIndex = character[0]
        const lastIndex = character[characterLength - 1]
      
        for (let i = 1; i < characterLength - 1; i++){
        
          
          const j = Math.ceil(Math.random() * (i + 1))
          if (character[j] !== firstIndex && character[j] !== lastIndex){
            
            const temp = character[i]
          character[i] = character[j]
          character[j] = temp
          }
          
   
          

        }

        result.push(character.join(''))
        
      })
      return result.join(' ')
   
    }
    console.log(scrambler(sentence))
  
  
   
    // console.log(scrambler(sentence))


 
  // console.log(newSentence)
  

  return (
    <div className="App">
      <h1 className='scambled-word'>
        {scrambler(sentence)}
      </h1>

    </div>
  );
}

export default App;
