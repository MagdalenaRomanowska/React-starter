// Plik  odpowiedzialny za wszystkie szczegóły obsługi kart przez reduksowy magazyn.
import shortid from 'shortid'; //Ten pakiet pozwala na generowanie krótkich, losowych 
//identyfikatorów. Dzięki niemu identyfikatory poszczególnych kart nie będą się powtarzać.

// selectors - służy do wyboru elementów – jest to funkcja filtrująca jakiś fragment stanu aplikacji.
export const getCardsForColumn = ({ cards, searchString }, columnId) =>
  cards.filter(
    (card) =>
      card.columnId == columnId &&
      new RegExp(searchString, 'i').test(card.title) //sprawdza czy tytuł karty pasuje do wyszukiwanej frazy.
  );
// wybiera karty z danej kolumny. Zwraca tablicę, zawierającą wyłącznie karty o columnId 
//pasującym do wyświetlanej kolumny. pierwszym argumentem jest state, z którego 
//destrukturyzujemy właściwość cards.

// selectors - służy do wyboru elementów – jest to funkcja filtrująca jakiś fragment stanu aplikacji.
export const getCardsBySearchString = ({ cards }, searchString ) =>
  cards.filter(
    (card) =>
      new RegExp(searchString, 'i').test(card.title) //sprawdza czy tytuł karty pasuje do wyszukiwanej frazy.
  );
// wybiera karty ze wszystkich list, z uwzględnieniem wyszukiwanej frazy.

// action name creator - Zależy nam na tym, aby zareagował tylko jeden 
//z reducerów – dlatego właśnie używamy kreatora nazw akcji. 
const reducerName = 'cards'; //zapisujemy nazwę właściwości stanu, na której będziemy wykonywać akcje.
const createActionName = name => `app/${reducerName}/${name}`;
//będzie nam potrzebna w każdym pliku z reduksowymi akcjami i reducerem. Służy ona 
//do zamiany nazwy akcji na dłuższy identyfikator, składający się z trzech członów. 
//Na przykład, jeśli wykorzystamy tę funkcję z argumentem 'TEST', w rezultacie 
//otrzymamy ciąg znaków 'app/cards/TEST'.
//To literał szablonowy, czyli tekst, który zawiera zmienne.
//W tekście zawartym w backtickach możemy używać zmiennych (lub innych wyrażeń 
//JS), zamykając je w nawiasach klamrowych poprzedzonych znakiem dolara ${ }.

// action types - Przyjęło się, że nazwy akcji zapisuje się wielkimi 
//literami, rozdzielając słowa podkreśleniami _. 
export const ADD_CARD = createActionName('ADD_CARD');
//potrzebujemy tylko dodawania karty. Definiujemy jej nazwę przez funkcję 
//createActionName - nazwa akcji zapisana w stałej ADD_CARD przyjmie 
//wartość 'app/cards/ADD_CARD'.

// action creators. Tworzymy akcje. Jej argument - przekazujemy w nim wszystkie 
//informacje, które są niezbędne w nowej karcie.
//Akcja to obiekt, który zawiera dwa parametry – type określający typ akcji 
//oraz payload, w którym znajdą się wszystkie dane niezbędne do wykonania tej akcji.
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer - redukuje dwa argumenty do jednego, zwracanego obiektu.
//Przyjmuje aktualny stan aplikacji oraz akcję – a zwraca nowy stan 
//aplikacji, z uwzględnieniem akcji (lub bez jej uwzględnienia).
//Reducer jest funkcją, która reaguje na dispatchowaną akcję.
//Tutaj: kiedy Creator w Column.js wywoła funkcję, otrzymaną w propsie action, spowoduje 
//to wysłanie akcji do magazynu, który uruchomi reducer – a właściwie, wszystkie reducery.
export default function reducer(state = [], action = {}) {
  switch (action.type) { //sprawdzamy typ akcji.
    case ADD_CARD: //Jeśli tu nie pasuje do żadnego wyrażenia...
      return [...state, action.payload];//A jak pasuje to zwraca tablicę
      //z rozpakowanym dotychczasowym stanem oraz dodaje nowy obiekt. 
      //W tym obiekcie rozpakowany zostanie payload akcji, oraz stworzone 
      //zostanie id karty za pomocą biblioteki shortid.
    default:
      return state; //...to zwróci ten argument.
  }
}
