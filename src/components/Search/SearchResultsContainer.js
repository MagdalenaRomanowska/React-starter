import {connect} from 'react-redux';
import SearchResults from './SearchResults';  // importuje komponent, dla którego jest kontenerem.
import {getCardsBySearchString} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => {   //w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem,
  const searchString = props.match.params.searchString;
  //możemy udostępnić komponentowi tablicę, znajdującą się w stanie aplikacji.
  return {
    cards: getCardsBySearchString(state, searchString),//możemy udostępnić komponentowi tablicę, znajdującą się w stanie aplikacji.
  };
};

export default connect(mapStateToProps)(SearchResults);
