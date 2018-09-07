import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Controls extends PureComponent {
  state = {
    greeting: '',
    name: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render() { 
    const { greeting, name } = this.state;
    return (
      <form>
        <InputControl name="greeting" value={greeting} onChange={this.handleChange}/>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
      </form>
    );
  }
}
 
export default connect(

)(Controls);

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);