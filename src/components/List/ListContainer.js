import {connect} from 'react-redux';
import List from './List';  // importuje komponent, dla którego jest kontenerem.
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';

const mapStateToProps = (state, props) => { //w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem,
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id); //Będziemy też potrzebować obiektu z właściwościami tej listy – w tym celu przefiltrujemy stan aplikacji.
  const listParams = filteredLists[0] || {};//Nasza przefiltrowana lista powinna zawierać jeden element – jest to obiekt zawierający właściwości listy. Możemy więc zapisać go w nowej stałej listParams. Na wypadek, gdyby w stanie aplikacji nie było listy o id z adresu strony, dodamy || [], czyli "lub użyj pustego obiektu", aby nie spotkać się z błędem.

  return {
    ...listParams, //Rozpakowaliśmy zawartość listParams do zwracanego obiektu, aby właściwości takie jak title czy description zostały przekazane do komponentu List jako propsy.
    columns: getColumnsForList(state, id),//możemy udostępnić komponentowi tablicę, znajdującą się w stanie aplikacji.
  };
}; // getColumnsForList - filtruje kolumny zawierające odpowiedni parametr listId.
//Selektor powinien w pierwszym argumencie zawsze przyjmować state, czyli cały stan aplikacji. 

const mapDispatchToProps = (dispatch, props) => ({  //dodaje propsy komponentu. 
  //Ich wartościami są funkcje wysyłające akcje do magazynu. 
  //Akcja jest zgłoszeniem chęci zmiany stanu aplikacji.
  addColumn: title => dispatch(createActionAddColumn({  //props addColumn będzie 
    //zawierał funkcję, przyjmującą jeden argument – title. Na podstawie tego 
    //argumentu zostanie wykonana funkcja dispatch (która jest argumentem funkcji 
    //mapDispatchToProps), wysyłająca akcję do magazynu i będzie zapisana w propsie addColumn.
    listId: props.match.params.id,//musimy zmienić props.id na props.match.params.id, aby poprawnie działało dodawanie nowych kolumn.
    title, //to samo co- title: title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
