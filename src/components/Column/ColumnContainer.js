import {connect} from 'react-redux';
import Column from './Column';  // importuje komponent, dla którego jest kontenerem.

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
// zwraca tablicę, zawierającą wyłącznie karty o columnId pasującym do 
//wyświetlanej kolumny. Pierwszym argumentem jest state, 
//z którego destrukturyzujemy właściwość cards.

const mapStateToProps = (state, props) => ({   //w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem,
  cards: getCardsForColumn(state, props.id),//możemy udostępnić komponentowi tablicę, znajdującą się w stanie aplikacji.
});

export default connect(mapStateToProps)(Column);
