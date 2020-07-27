// ten plik (kontener) to powiązanie stanu aplikacji z propsami.
//Pozwoli nam to na oddzielenie warstwy współpracującej ze stanem od samego komponentu.

import {connect} from 'react-redux';
import Home from './Home';  //HomeContainer.js importuje komponent, dla którego jest kontenerem – w tym wypadku Home,

const mapStateToProps = state => ({   //w stałej mapStateToProps zapisujemy funkcję, która definiuje powiązanie propsów z stanem,
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,//możemy udostępnić komponentowi tablicę, znajdującą się w stanie aplikacji.
});

export default connect(mapStateToProps)(Home);

//wyrażenie, które eksportujemy na końcu pliku, jest odpowiedzialne 
//za połączenie komponentu Home z magazynem, czyli sprawia, że wszystko 
//działa – w ostatniej parze nawiasów musimy podać komponent, 
//który jest wykorzystywany w tym kontenerze.

//Funkcja connect, zaimportowana z react-redux, zwraca funkcję, która 
//łączy komponent ze stanem, zgodnie z przekazanymi argumentami, czyli 
//mapStateToProps. Tę zwróconą funkcję od razu wykonujemy z argumentem Home. 
//Wynik tego wykonania funkcji zwracanej przez wykonanie funkcji jest 
//eksportowany i może być wykorzystany w innych komponentach tak samo, 
//jakby był to komponent Home.

//mapStateToProps zwraca obiekt, w którym:
//-klucz właściwości to nazwa propsa, który będzie dostępny w komponencie,
//-wartość właściwości wykorzystuje argument state do pobrania 
//odpowiedniej informacji ze stanu aplikacji.