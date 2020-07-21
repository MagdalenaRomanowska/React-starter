import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser'; //Wykorzystamy go do sparsowania kodu 
//HTML w treści nagłówka. Chcemy pisać aplikację tak, by w przyszłości mogła działać 
//w oparciu o komunikację z API. Wtedy na pewno będziemy otrzymywać tylko tekst 
//(w tym kod HTML), więc zastosujemy parsowanie.
import styles from './Hero.scss';

const Hero = props => ( //komponent funkcyjny-propsy będą przekazane jako argument funkcji ReactHtmlParser.
  // pomijamy człon this. przed props w komponencie funkcyjnym. 
  <header className={styles.component}>  
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2> 
    <img className={styles.image} src={props.image} alt="space-rocket" />
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,//.isRequired, jeśli chcemy wyświetlić błąd w konsoli, jeśli komponent nie otrzymał danej właściwości. 
  image: PropTypes.string,//Jeśli nie dodamy .isRequired, parametr ten będzie opcjonalny.
};
export default Hero;
