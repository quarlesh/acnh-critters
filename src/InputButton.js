import React from 'react';
import { Button } from '@material-ui/core'

function InputButton(props) {
    const { title } = props
    return (
        <div>
            <Button>{title}</Button>
        </div>
    );
}

export default InputButton;
