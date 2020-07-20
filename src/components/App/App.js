import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer.js';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  render() { //Od zawartości tej metody zależy to, co wyświetli się w przeglądarce.
    const {title, subtitle, lists} = this.props;
    return (  //Podstawową zasadą tworzenia komponentu jest to, że musi zwracać dokładnie jeden element najwyższego poziomu. Tutaj to div.
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (//iteracja po listach.
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default App;

// { } – pozwalają na wstawienie kodu JS wewnątrz kodu JSX.
// {...listData} to spread operator, który pozwala na rozpakowanie obiektu lub tablicy. Oznacza to, że wszystkie właściwości z listData zostaną przypisane do komponentu List, jako jego właściwości.