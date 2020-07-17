import React from 'react';  //Importujemy zainstalowane biblioteki.
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';  //Importujemy zainstalowane biblioteki.
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('app'));
//Ta linia kodu mówi: "znajdź element, którego id to 'app', i wstaw do 
//niego komponent App".
//Służy ona do wyświetlenia zawartości strony – w drugim argumencie 
//podajemy element z pliku index.html, do którego będzie wstawiana treść.
//1szy arg.: Równie dobrze moglibyśmy napisać <App></App>, ale wygodniej 
//jest napisać <App />.