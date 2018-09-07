import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Controls extends PureComponent {
  state = {
    greeting: '',
    name: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render() { 
    const { greeting, amount } = this.state;
    return (
      <form>
        <InputControl name="greeting" value={greeting} onChange={this.handleChange}/>
        <InputControl name="amount" value={amount} onChange={this.handleChange}/>
      </form>
    );
  }
}
 
export default Controls;

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);