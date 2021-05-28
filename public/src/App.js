import './App.css';
import React, { useState } from "react";
import Data from './abc.json';
import Option from './Options'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

function App(){
  const [Question, setQuestion] = useState(Data);
  const [count, setcount]=useState(0);
  const[check, setcheck]=useState(true);
  const[total,settotal]=useState(0);
  const Increment =() =>{
    if(count<5){
      setcount(count+1);
      setQuestion(Question);
    }
    if(count===4)
    setcheck(false);
   
  }
  
  const Decrement=()=>{
    if(count>0){
      setcount(count-1);
      setQuestion(Question);
    }
    if(count===0)
    setcount(count);
  }

  const Checkstatus=()=>{
    if(Question[total].status==="correct")
    {
      settotal(total+1);
    }
    console.log(total);
  }

  return(
   check ? (

    <div className="App">
    <h1>{Question[count].id +' : '+Question[count].question}</h1>

    <Form.Group>{Object.values(Question[count].options[0]).map((item, i) => (
     
      <Option key={i} value={item} qes = {Question[count]}/>
    ))}
    </Form.Group>
    <button onClick={Decrement}>Prev</button>
    <button onClick={Increment}>Next</button>
    
     </div>
   ):(
    <div >
    {Question.map((item, i) => (
      <div>
      <h1>{item.id +' : '+item.question}</h1>
      <p>{item.score}</p>
      <p>{item.status}</p>
      </div>
      
    ))}
   </div>
   )


  )
}

export default App;


