import React, {useState} from 'react';
import Critters from './Critters'
import Input from './Input.js'
function App() {
  const [state, setState] = useState({type: -1})

  const handleSetType = (t) => {
    setState({...state, type: t})
  }
    console.log("App state", state)
  return (
    <div>
      <Input 
        type={state.type} 
        setType={handleSetType}/>
      <Critters 
        type={state.type}
      />
    </div>
  );
}

export default App;
