import React from 'react';
import './Car.css';
import withClass from '../hoc/withClass';
import PropTypes from 'prop-types';

class Car extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }
    componentDidMount() {
        if (this.props.index === 0) {
            // this.inputRef.focus();
            this.inputRef.current.focus();
        }
        
    }

    render() {
        console.log(this.props, 'props')
        const inputClasses = ['input'];
        
        if (this.props.name !== '') {
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }
        return (
            <div className="Car">
                <h2>{this.props.car.name}</h2>
                <p>{this.props.car.year}</p>
                <input
                    // ref={(inputRef) => this.inputRef = inputRef}
                    ref={this.inputRef}
                    className={inputClasses.join(' ')}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.car.name}
                />
                <button onClick={this.props.onDeleteElem}>Delete</button>
            </div>
        )
    }

}

Car.propTypes = {
    car: PropTypes.object.isRequired,
    onChangeName: PropTypes.func,
    onDeleteElem: PropTypes.func
}

export default withClass(Car, "str");