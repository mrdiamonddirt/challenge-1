import {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Counter count={count} changenum={setCount} />
  )
}

function Counter(props) {
  return(
    <>
    <button onClick={() => props.changenum(props.count -1)}>-</button>
    <h1>{props.count}</h1>
    <button onClick={() => props.changenum(props.count +1)}>+</button>
    </>
  )
}


export default App;
