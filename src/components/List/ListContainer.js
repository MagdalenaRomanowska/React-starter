import {connect} from 'react-redux';
import List from './List';  // importuje komponent, dla którego jest kontenerem.
import {getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux.js';

const mapStateToProps = (state, props) => ({   //w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem,
  columns: getColumnsForList(state, props.id),//możemy udostępnić komponentowi tablicę, znajdującą się w stanie aplikacji.
});  // getColumnsForList - filtruje kolumny zawierające odpowiedni parametr listId.
//Selektor powinien w pierwszym argumencie zawsze przyjmować state, czyli cały stan aplikacji. 

const mapDispatchToProps = (dispatch, props) => ({  //dodaje propsy komponentu. 
  //Ich wartościami są funkcje wysyłające akcje do magazynu. 
  //Akcja jest zgłoszeniem chęci zmiany stanu aplikacji.
  addColumn: title => dispatch(createActionAddColumn({  //props addColumn będzie 
    //zawierał funkcję, przyjmującą jeden argument – title. Na podstawie tego 
    //argumentu zostanie wykonana funkcja dispatch (która jest argumentem funkcji 
    //mapDispatchToProps), wysyłająca akcję do magazynu i będzie zapisana w propsie addColumn.
    listId: props.id,
    title, //to samo co- title: title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
