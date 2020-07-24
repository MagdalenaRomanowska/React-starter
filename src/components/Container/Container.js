import React from 'react';
import PropTypes from 'prop-types';
import styles from './Container.scss';

const Container = props => ( //komponent funkcyjny-propsy będą przekazane jako argument funkcji ReactHtmlParser.
  // pomijamy człon this. przed props w komponencie funkcyjnym. 
  <div className={styles.component}>  
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node, 
};
export default Container;
