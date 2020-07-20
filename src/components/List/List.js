import React from 'react';
import PropTypes from 'prop-types'; //sprawdzanie typów wartości.
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';//Wykorzystamy go do sparsowania kodu HTML w opisie listy.
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
//import Creator from '../Creator/Creator.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description, columns} = this.props; //zdefiniowanie poszczególnych propsów jako stałe.
    return (
      <section className={styles.component}>  
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (//iteracja po kolumnach.
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default List;

// metoda .map zadziała jak pętla. Metoda .map, którą tutaj wykorzystujemy, jest dostępna dla każdej tablicy (array). Służy ona do 
//modyfikacji każdego jej elementu – ale zamiast zmieniać tablicę, na której została wykonana, zwraca nową tablicę ze zmienionymi wartościami.
// Innymi słowy, jest to szybki i wygodny sposób na stworzenie tablicy, której każdy element jest przekonwertowanym elementem tablicy this.state.columns. 
//Owo przekonwertowanie polega na stworzeniu instancji klasy Column za pomocą kodu JSX, wraz z przypisaniem jej właściwości z danego elementu tablicy wejściowej (this.state.columns).
//Komponent Creator przyjmuje dwie właściwości:
// - text to treść placeholdera w polu tekstowym, która służy wyjaśnieniu do czego służy dany komponent,
// - action zawiera funkcję, która będzie wykonana w momencie kliknięcia guzika "OK" (widocznego po wpisaniu jakiegoś tekstu w pole tekstowe).