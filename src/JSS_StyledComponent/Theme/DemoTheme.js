import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
const configDarkTheme = {
    color: '#fff',
    background: '#000'
};
const configLightTheme = {
    color: '#FFF',
    background: '#6633FF'
};
export default class DemoTheme extends Component {
    state = {
        currentTheme: configDarkTheme,
    };
    handleChange = (event) => {
        this.setState({
            currentTheme: event.target.value === "1" ? configDarkTheme : configLightTheme
        });

    };
    render() {

        const DivStyle = styled.div`
        color:${props => props.theme.color};
        padding:5%;
        background-color:${props => props.theme.background}
    `;

        return (
            <ThemeProvider theme={this.state.currentTheme}>
                <DivStyle>
                    Xin chao minh la carrot ne
                </DivStyle>
                <select onChange={this.handleChange}>
                    <option value="1">Dark Theme</option>
                    <option value="2">Light Theme</option>
                </select>
            </ThemeProvider>

        );
    }
}

