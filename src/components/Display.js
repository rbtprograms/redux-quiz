import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getName, getGreeting } from './reducers';

class Display extends PureComponent {

  static propTypes = {
    name: PropTypes.string,
    greeting: PropTypes.string
  }
  render() { 
    const { name, greeting } = this.props;
    return (
      <div>
        <h3>{greeting}</h3>
        <p>{name}</p>
      </div>
    );
  }
}
 
export default connect(
  state => ({
    name: getName(state),
    greeting: getGreeting(state)
  })
)(Display);