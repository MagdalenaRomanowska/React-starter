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
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={FAQ} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;

//atrybut exact, dzięki któremu dany widok pokaże się tylko wtedy, gdy będziemy 
//na dokładnie takiej ścieżce, jak zdefiniowana w routingu (np. w drugim przypadku 
//musi to być dokładnie /info, a nie np. info/about-me).