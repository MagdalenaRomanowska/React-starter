//ten plik to "centrum dowodzenia" routingiem w naszym projekcie.
//Ten plik informuje aplikację, jakie komponenty powinna wyświetlić, 
//gdy użytkownik znajduje się na określonej podstronie (czyli ścieżce path). 
//Strona główna aplikacji będzie pokazywać komponent Home, a gdy na końcu adresu 
//w przeglądarce dodamy /info, przeniesiemy się na naszą nową stronę statyczną.

import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import MainLayout from '../MainLayout/MainLayout';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import List from '../List/ListContainer';
import SearchResults from '../Search/SearchResultsContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:searchString" component={SearchResults} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;

//atrybut exact, dzięki któremu dany widok pokaże się tylko wtedy, gdy będziemy 
//na dokładnie takiej ścieżce, jak zdefiniowana w routingu (np. w drugim przypadku 
//musi to być dokładnie /info, a nie np. info/about-me).
//<Route exact path="/list/:id" component={List} /> będzie obsługiwał adresy 
//wyświetlające pojedynczą listę. Zapis :id sprawi, że nasz komponent List otrzyma 
//informację o tym, co znalazło się w adresie strony po /list/.
