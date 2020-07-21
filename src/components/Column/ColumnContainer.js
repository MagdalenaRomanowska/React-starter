import {connect} from 'react-redux';
import Column from './Column';  // importuje komponent, dla którego jest kontenerem.
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({   //w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem,
  cards: getCardsForColumn(state, props.id),//możemy udostępnić komponentowi tablicę, znajdującą się w stanie aplikacji.
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
