import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser'; //Wykorzystamy go do sparsowania kodu HTML w treści nagłówka.
import styles from './Hero.scss';

const Hero = props => ( //komponent funkcyjny-propsy będą przekazane jako argument funkcji.
  // pomijamy człon this. przed props.
  <header className={styles.component}>  
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.imgRocket} alt="space-rocket" />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,//.isRequired, jeśli chcemy wyświetlić błąd w konsoli, jeśli komponent nie otrzymał danej właściwości. 
  imgRocket: PropTypes.string,//Jeśli nie dodamy .isRequired, parametr ten będzie opcjonalny.
};
export default Hero;
