import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
  }

  render() {
    return (
      <section className={styles.component}>  
        <h3 className={styles.title}>{this.props.title}</h3>
      </section>
    )
  }
}

export default Card;
