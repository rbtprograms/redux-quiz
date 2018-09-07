import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateGreeting, updateName } from './actions';

class Controls extends PureComponent {
  state = {
    greeting: '',
    name: ''
  };

  static propTypes = {
    updateGreeting: PropTypes.func.isRequired,
    updateName: PropTypes.func.isRequired,
  };

  handleChangeName = ({ target }) => {
    const { updateName } = this.props;
    this.setState({ [target.name]: target.value });
    updateName(this.state.name);
  };

  handleChangeGreeting = ({ target }) => {
    const { updateGreeting } = this.props;
    this.setState({ [target.name]: target.value });
    updateGreeting(this.state.greeting);
  };
  render() { 
    const { greeting, name } = this.state;
    return (
      <form>
        <InputControl name="greeting" value={greeting} onChange={this.handleChangeGreeting}/>
        <InputControl name="name" value={name} onChange={this.handleChangeName}/>
      </form>
    );
  }
}
 
export default connect(
  null,
  { updateGreeting, updateName }
)(Controls);

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);