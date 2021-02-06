import React from 'react';
import { Select, MenuItem } from '@material-ui/core'


function Input(props) {
    const { title } = props
    return (
        <div>
            <Select labelId="hemisphere" id="hemisphere" value="">
                <MenuItem value="north">Northern</MenuItem>
                <MenuItem value="south">Southern</MenuItem>
            </Select>
        </div>
    );
}

export default Input;
