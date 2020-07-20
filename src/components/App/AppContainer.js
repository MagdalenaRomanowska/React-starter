import {connect} from 'react-redux';
import App from './App';  //AppContainer.js importuje komponent, dla którego jest kontenerem – w tym wypadku App,

const mapStateToProps = state => ({   //w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem,
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,//możemy udostępnić komponentowi tablicę, znajdującą się w stanie aplikacji.
});

export default connect(mapStateToProps)(App);

//wyrażenie, które eksportujemy na końcu pliku, jest odpowiedzialne 
//za połączenie komponentu App z magazynem, czyli sprawia, że wszystko 
//działa – w ostatniej parze nawiasów musimy podać komponent, 
//który jest wykorzystywany w tym kontenerze.

//Funkcja connect, zaimportowana z react-redux, zwraca funkcję, która 
//łączy komponent ze stanem, zgodnie z przekazanymi argumentami, czyli 
//mapStateToProps. Tę zwróconą funkcję od razu wykonujemy z argumentem App. 
//Wynik tego wykonania funkcji zwracanej przez wykonanie funkcji jest 
//eksportowany i może być wykorzystany w innych komponentach tak samo, 
//jakby był to komponent App.

//mapStateToProps zwraca obiekt, w którym:
//-klucz właściwości to nazwa propsa, który będzie dostępny w komponencie,
//-wartość właściwości wykorzystuje argument state do pobrania 
//odpowiedniej informacji ze stanu aplikacji.