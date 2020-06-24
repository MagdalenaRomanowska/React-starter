import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';

class Column extends React.Component {
  state = {   //Początkowy stan komponentu. Tylko i wyłącznie przy ustawianiu początkowego stanu można przypisać wartość do this.state za pomocą znaku równości =. Poza tym przypadkiem zawsze będziemy zmieniać stan za pomocą metody this.setState, odziedziczonej z klasy React.Component.
    cards: this.props.cards || [], //operator lub || - podanie domyślnej wartości w przypadku, gdy żądana właściwość nie istnieje. Innymi słowy, jeśli this.props.columns nie zostało zdefiniowane, czyli komponent nie otrzymał propsa columns, to w this.state.columns znajdzie się pusta tablica [].
  }
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
  }

  addCard(title){  //"dodaj do this.state.cards nowy obiekt".
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>  
        <h3 className={styles.title}>{this.props.title}</h3>
        <div className={styles.cards}>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))} 
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    )
  }
}

export default Column;
