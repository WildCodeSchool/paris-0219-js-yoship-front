import React from 'react';
import { Input } from 'reactstrap';

class FrenchPhoneField extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  // This method is declared using an arrow function initializer solely
  // to guarantee its binding, as we cannot use decorators just yet.
  phoneChange = ({ target: { value } }) => {
    value = value
      // Remove all non-digits, turn initial 33 into nothing
      .replace(/\D+/, '')
      .replace(/^330?/, '0')
      // Stick to first 10, ignore later digits
      .slice(0, 13)
      // Add a space after any 2-digit group followed by more digits
      .replace(/(\d{2})(?=\d)/g, '$1 ')
    this.setState({ value: value }, () => {
      this.props.getPhone(this.state.value)
    })
  }

  render() {
    return (
      <Input
        autoComplete="tel"
        onChange={this.phoneChange}
        placeholder="Numéro de téléphone"
        required="required"
        type="tel"
        value={this.state.value}
      />
    )
  }
}

export default FrenchPhoneField;