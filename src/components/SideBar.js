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
                <Logo style={{margin: "0 auto",display:"block", transform:"translate(0,25%)"}} />
            </div>
        )
      }
}

export default SideBar