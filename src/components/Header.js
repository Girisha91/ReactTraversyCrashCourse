import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

const Header = (props) => {
    const onAddClicked = () => {
        console.log("clicked in header component")
    }
    return (
        // <header>
        //     {/* inline styling for elements  */}
        //     <h1 style={{ color: 'red', backgroundColor: 'black' }}>{props.title}</h1>
        //     {/* inline styling for elements using variables */}
        //     <h1 style={headingStyle}>{props.title}</h1>
        // </header>
        <header className="header">
            <h1>{props.title}</h1>
            <Button color={props.showAdd ? 'red' : 'green'} text={props.showAdd ? 'Close' : 'Add Task'} onClick={props.onAddBut} />
        </header>
    )
}


// passing default props
Header.defaultProps = {
    title: 'Defaule Tracker'
}



// inline styling for elements 
const headingStyle = {
    color: 'white',
    backgroundColor: 'Black'

}


// defining types of props
Header.prototype = {
    title: PropTypes.string
}

export default Header
