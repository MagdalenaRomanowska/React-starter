//Wyświetlaniem treści strony głównej zajmie się ten komponent.
import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink.js';

class Home extends React.Component {// dziedziczenie z klasy React.Component.
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() { //Od zawartości tej metody zależy to, co wyświetli się w przeglądarce.
    const {title, subtitle, lists} = this.props;
    return (  //Podstawową zasadą tworzenia komponentu jest to, że musi 
      //zwracać dokładnie jeden element najwyższego poziomu. Tutaj to main.
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists && lists.map(listData => (//iteracja po listach.
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;

// { } – pozwalają na wstawienie kodu JS wewnątrz kodu JSX.
// {...listData} to spread operator, który pozwala na rozpakowanie obiektu 
//lub tablicy. Oznacza to, że wszystkie właściwości (title, description, image, columns)
// z listData zostaną przekazane do komponentu List, jako jego właściwości.
// Początkowy stan listy kolumn będzie korzystał z this.props.columns.