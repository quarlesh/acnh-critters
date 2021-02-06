import React, {useState, useEffect} from 'react';
import { Select, MenuItem, Checkbox, FormControl, FormControlLabel } from '@material-ui/core'
function Input(props) {

    //const { title } = props
    const {setType, setHemisphere, hemisphere} = props
    const [state, setState] = useState({
        checkedBugs: true,
        checkedFish: true
    })

    const toggleCheckbox = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleChangeHemisphere = (event) => {
        setHemisphere(event.target.value);
    };

    useEffect(() => {
        let {checkedFish, checkedBugs} = state
        let type = -1
        if (checkedFish && !checkedBugs) {
            type = 1
        }
        else if (!checkedFish && checkedBugs) {
            type = 0
        }
        else if (!checkedFish && !checkedBugs) {
            type = null
        }
        setType(type)
    }, [state])

    return (
        <div>
            <Select labelId="hemisphere" id="hemisphere" value={hemisphere} onChange={handleChangeHemisphere} name="hemisphere">
                <MenuItem value="north">Northern</MenuItem>
                <MenuItem value="south">Southern</MenuItem>
            </Select>
            <FormControl>
            <FormControlLabel
                control={<Checkbox checked={state.checkedFish} onChange={toggleCheckbox} name={"checkedFish"} />}
                label="Fish"
            />
            <FormControlLabel
                control={<Checkbox checked={state.checkedBugs} onChange={toggleCheckbox} name={"checkedBugs"} />}
                label="Bugs"
            />
            </FormControl>
        </div>
    );
}

export default Input;
