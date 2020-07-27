import React from 'react';  //Importujemy zainstalowane biblioteki.
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';  //Importujemy zainstalowane biblioteki.
import App from './components/App/App';
import { Provider } from 'react-redux'; //poinformowanie aplikacji, że ma korzystać z magazynu Reduksa.
import store from './redux/store';//poinformowanie aplikacji, że ma korzystać z magazynu Reduksa.

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
// Metoda ReactDom.render służy do wyświetlenia zawartości strony.
//Ta linia kodu mówi: "znajdź element, którego id to 'app', i wstaw do 
//niego komponent App".
//Służy ona do wyświetlenia zawartości strony – w drugim argumencie 
//podajemy element z pliku index.html, do którego będzie wstawiana treść.
//1szy arg.: Równie dobrze moglibyśmy napisać <App></App>, ale wygodniej 
//jest napisać <App />.
//Aby nasza aplikacja mogła korzystać z magazynu, musimy zwrappować 
//całą aplikację w komponent Provider.