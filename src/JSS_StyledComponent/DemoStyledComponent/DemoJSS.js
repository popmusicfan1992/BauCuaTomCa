import React, { Component } from 'react';
import { Button } from '../Component/Button';
import { StyledLink } from '../Component/Link';
import { TextField } from '../Component/TextField';

export default class DemoJSS extends Component {
    render() {
        return (
            <div>
                <Button className='button1' primary>Hello</Button>
                <StyledLink >asdasd</StyledLink>
                <TextField colorInput='green'></TextField>
            </div>
        );
    }
}
