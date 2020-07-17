import React from 'react';
import PropTypes from 'prop-types'; //sprawdzanie typów wartości.
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';//Wykorzystamy go do sparsowania kodu HTML w opisie listy.
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import Creator from '../Creator/Creator.js';

class List extends React.Component {
  state = {   //Początkowy stan komponentu. Tylko i wyłącznie przy ustawianiu początkowego stanu można przypisać wartość do this.state za pomocą znaku równości =. Poza tym przypadkiem zawsze będziemy zmieniać stan za pomocą metody this.setState, odziedziczonej z klasy React.Component.
    columns: this.props.columns || [], //operator lub || - podanie domyślnej wartości w przypadku, gdy żądana właściwość nie istnieje. Innymi słowy, jeśli this.props.columns nie zostało zdefiniowane, czyli komponent nie otrzymał propsa columns, to w this.state.columns znajdzie się pusta tablica [].
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  addColumn(title){  //"dodaj do this.state.columns nowy obiekt".
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>  
        <Hero titleText={this.props.title} imgRocket={this.props.image} />
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}          
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))} 
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
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