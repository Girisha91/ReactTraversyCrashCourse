import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} style={{ backgroundColor: props.color }} className='btn'>{props.text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Undefined'
}

// p should be small in here
Button.propTypes = {
    // p should be capital inside the object
    text: PropTypes.string,
    color: PropTypes.string,
    // it is necessary required
    onClick: PropTypes.func.isRequired
}
export default Button
