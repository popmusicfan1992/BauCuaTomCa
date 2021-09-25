import styled from 'styled-components';
import React from 'react';


export const Link = ({ classname, children, ...resprops }) => (
    <a className={classname} {...resprops}>
        {children}
    </a>
);

export const StyledLink = styled(Link)`
    color:blue !important;
    font-weight: bold;

`;