import React from 'react';
import { Input } from 'reactstrap';

class FrenchPhoneField extends React.Component {
  static defaultProps = {
    name: 'tel',
    placeholder: 'Phone Number',
    required: false,
  }

  //static propTypes = {
    //name: PropTypes.string.isRequired,
    //placeholder: PropTypes.string,
    //required: PropTypes.bool,
  //}

  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  // This method is declared using an arrow function initializer solely
  // to guarantee its binding, as we cannot use decorators just yet.
  handleChange = ({ target: { value } }) => {
    value = value
      // Remove all non-digits, turn initial 33 into nothing
      .replace(/\D+/, '')
      .replace(/^330?/, '0')
      // Stick to first 10, ignore later digits
      .slice(0, 10)
      // Add a space after any 2-digit group followed by more digits
      .replace(/(\d{2})(?=\d)/g, '$1 ')
    this.setState({ value })
  }

  render() {
    const { name, placeholder, required } = this.props
    return (
      <Input 
        autocomplete="tel"
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        required={required}
        type="tel"
        value={this.state.value}
        bsSize="sm" />
    )
  }
}

export default FrenchPhoneField;