import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './Hero.scss';

const Hero = props => (
  <header className={styles.component}>  
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.imgRocket} alt="space-rocket" />
  </header>
)

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    imgRocket: PropTypes.string,
  };
export default Hero;