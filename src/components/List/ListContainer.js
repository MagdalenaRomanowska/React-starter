import {connect} from 'react-redux';
import List from './List';  // importuje komponent, dla którego jest kontenerem.

export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
// zwraca tablicę, zawierającą wyłącznie kolumny o listId pasującym do 
//wyświetlanej listy. Pierwszym argumentem jest state, 
//z którego destrukturyzujemy właściwość columns.

const mapStateToProps = (state, props) => ({   //w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem,
  columns: getColumnsForList(state, props.id),//możemy udostępnić komponentowi tablicę, znajdującą się w stanie aplikacji.
});

export default connect(mapStateToProps)(List);
