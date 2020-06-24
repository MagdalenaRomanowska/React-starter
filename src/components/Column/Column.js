import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';

class List extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    columnTitle: PropTypes.string,
  }

  render() {
    return (
      <section className={styles.component}>  
        <h3 className={styles.title}>{this.props.columnTitle}</h3>
      </section>
    )
  }
}

export default List;
