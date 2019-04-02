import React from 'react'

import SearchComponent from './SearchComponent'

const formStyle = {
    margin:"0 10%"
}

function MasterForm() {

    return (
        <div style={formStyle}>
            <SearchComponent />
        </div>
    )
}

export default MasterForm