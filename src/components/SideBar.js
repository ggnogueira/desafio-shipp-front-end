import React from 'react'
import { ReactComponent as Logo } from '../logo.svg'
import { withStyles } from '@material-ui/core';

const sidebarStyles = {
    backgroundColor:"#7967FF",
    height:"100%"
};

class SideBar extends React.Component
{
    render() {
        return (
            <div style={sidebarStyles}>
                <Logo />
            </div>
        )
      }
}

export default SideBar