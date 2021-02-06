import React, {useState, useEffect} from 'react';
import { Select, MenuItem, Checkbox, FormControl, FormControlLabel } from '@material-ui/core'
function Input(props) {

    //const { title } = props
    const {setType} = props
    const [state, setState] = useState({
        checkedBugs: true,
        checkedFish: true
    })

    const toggleCheckbox = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    useEffect(() => {
        let {checkedFish, checkedBugs} = state
        if (checkedFish && !checkedBugs) {
            setType(1)
        }
        else if (!checkedFish && checkedBugs) {
            setType(0)
        }
        else if (!checkedFish && !checkedBugs) {
            setType(null)
        }
        else {
            setType(-1)
        }
    }, [state])

    return (
        <div>
            <Select labelId="hemisphere" id="hemisphere" value="">
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
