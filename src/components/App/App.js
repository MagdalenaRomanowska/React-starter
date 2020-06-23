import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() { //Od zawartości tej metody zależy to, co wyświetli się w przeglądarce.
    return (  //Podstawową zasadą tworzenia komponentu jest to, że musi zwracać dokładnie jeden element najwyższego poziomu. Tutaj to div.
      <main className={styles.component}>  
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List />
      </main>
    )
  }
}

export default App;

// { } – pozwalają na wstawienie kodu JS wewnątrz kodu JSX.