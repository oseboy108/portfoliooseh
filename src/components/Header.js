import PropTypes from 'prop-types'

const header = ({title}) => {
    return (
        <header className="header">
            <h1 style={headingStyle}>{title}</h1>
            <button className="btn">Add button</button>
        </header>
    )
}

//css in js
const headingStyle = {
    color: "black",
    backgroundColor: ""
}


export default header
