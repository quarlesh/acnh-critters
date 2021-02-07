import React, {useEffect, useState} from 'react';
import Critters from './Critters'
import Input from './Input.js'
function App() {
  const [state, setState] = useState({
    type: -1,
    hemisphere: null,
    month: (new Date()).getMonth() + 1,
    timeFilter: true,
    hour: (new Date()).getHours(),
    isRaining: false
  })

  useEffect(() => {
    let h = getHemisphere()
    handleSetHemisphere(h)
  }, [])

  const getHemisphere = () => {
    let y = new Date()
    if (y.getTimezoneOffset === undefined) return null
    y = y.getFullYear()
    let jan = -(new Date(y, 0, 1, 0, 0, 0, 0).getTimezoneOffset())
    let jul = -(new Date(y, 6, 1, 0, 0, 0, 0).getTimezoneOffset())
    let diff = jan - jul
    if (diff <  0) return 'north'
    if (diff >  0) return 'south'
    return null
  }
  const handleSetType = (t) => {
    setState({...state, type: t})
  }
  const handleSetHemisphere = (h) => {
    setState({...state, hemisphere: h})
  }
  const handleSetMonth = (m) => {
    setState({...state, month: m})
  }
  const handleIsRaining = (r) => {
    setState({...state, isRaining: r})
  }
  let {type, hemisphere, month, hour, timeFilter, isRaining} = state
  return (
    <div>
      <Input 
        type={type} 
        hemisphere={hemisphere}
        setType={handleSetType}
        setHemisphere={handleSetHemisphere}
        setMonth={handleSetMonth}
        />
      <Critters 
        type={type}
        hemisphere={hemisphere}
        month={month}
        timeFilter={timeFilter}
        hour={hour}
        isRaining={isRaining}
      />
    </div>
  );
}

export default App;
