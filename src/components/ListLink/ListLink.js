import React from 'react';
import styles from './ListLink.scss';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

const ListLink = ({id, title, image, description}) => (
  <Link to={`/list/${id}`} className={styles.link}> 
    <section className={styles.component}>
      <div className={styles.text}>
        <h2 className={styles.title}>{ReactHtmlParser(title)}</h2>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
      </div>
      <div className={styles.image}>
        <img src={image} />
      </div>
    </section>
  </Link>
);

ListLink.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  image: PropTypes.string.isRequired,
};

ListLink.defaultProps = {
  description: settings.defaultListDescription,
};

export default ListLink;

//cały element wstawiony do komponentu Link, kierujący pod odpowiedni adres, 
//zawierający id listy.
//zamiast komponentu Hero użyliśmy układu dwóch kolumn – lewej z tytułem i opisem, 
//i prawej ze zdjęciem.
//ten komponent nie potrzebuje kontenera, ponieważ nie korzysta z reduksowego 
//stanu aplikacji, tylko z propsów przekazanych przez rodzica (komponent Home).