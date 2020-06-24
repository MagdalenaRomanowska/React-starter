import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  render() { //Od zawartości tej metody zależy to, co wyświetli się w przeglądarce.
    return (  //Podstawową zasadą tworzenia komponentu jest to, że musi zwracać dokładnie jeden element najwyższego poziomu. Tutaj to div.
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
      </main>
    )
  }
}

export default App;

// { } – pozwalają na wstawienie kodu JS wewnątrz kodu JSX.
// {...listData} to spread operator, który pozwala na rozpakowanie obiektu lub tablicy. Oznacza to, że wszystkie właściwości z listData zostaną przypisane do komponentu List, jako jego właściwości.