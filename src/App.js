import React, {useState} from 'react';
import Critters from './Critters'
import Input from './Input.js'
function App() {
  const [state, setState] = useState({
    type: -1,
    hemisphere: "north",
    month: 2
  })

  const handleSetType = (t) => {
    setState({...state, type: t})
  }
  const handleSetHemisphere = (h) => {
    setState({...state, hemisphere: h})
  }
  let {type, hemisphere, month} = state
  return (
    <div>
      <Input 
        type={type} 
        hemisphere={hemisphere}
        setType={handleSetType}
        setHemisphere={handleSetHemisphere}/>
      <Critters 
        type={type}
        hemisphere={hemisphere}
        month={month}
      />
    </div>
  );
}

export default App;
