// Plik  odpowiedzialny za wszystkie szczegóły obsługi kolumn przez reduksowy magazyn.
import shortid from 'shortid'; //Ten pakiet pozwala na generowanie krótkich, losowych 
//identyfikatorów. Dzięki niemu identyfikatory poszczególnych kart nie będą się powtarzać.

// selectors - służy do wyboru elementów – jest to funkcja filtrująca jakiś fragment stanu aplikacji.
export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
// wybiera kolumny z danej listy. Zwraca tablicę, zawierającą wyłącznie kolumny o listId 
//pasującym do wyświetlanej listy. pierwszym argumentem jest state, z którego 
//destrukturyzujemy właściwość columns.

// action name creator - Zależy nam na tym, aby zareagował tylko jeden 
//z reducerów – dlatego właśnie używamy kreatora nazw akcji. 
const reducerName = 'columns'; //zapisujemy nazwę właściwości stanu, na której będziemy wykonywać akcje.
const createActionName = name => `app/${reducerName}/${name}`;
//będzie nam potrzebna w każdym pliku z reduksowymi akcjami i reducerem. Służy ona 
//do zamiany nazwy akcji na dłuższy identyfikator, składający się z trzech członów. 
//Na przykład, jeśli wykorzystamy tę funkcję z argumentem 'TEST', w rezultacie 
//otrzymamy ciąg znaków 'app/columns/TEST'.
//To literał szablonowy, czyli tekst, który zawiera zmienne.
//W tekście zawartym w backtickach możemy używać zmiennych (lub innych wyrażeń 
//JS), zamykając je w nawiasach klamrowych poprzedzonych znakiem dolara ${ }.

// action types - Przyjęło się, że nazwy akcji zapisuje się wielkimi 
//literami, rozdzielając słowa podkreśleniami _. 
export const ADD_COLUMN = createActionName('ADD_COLUMN');
//potrzebujemy tylko dodawania kolumny. Definiujemy jej nazwę przez funkcję 
//createActionName - nazwa akcji zapisana w stałej ADD_COLUMN przyjmie 
//wartość 'app/columns/ADD_COLUMN'.

// action creators. Tworzymy akcje. Jej argument - przekazujemy w nim wszystkie 
//informacje, które są niezbędne w nowej karcie.
//Akcja to obiekt, który zawiera dwa parametry – type określający typ akcji 
//oraz payload, w którym znajdą się wszystkie dane niezbędne do wykonania tej akcji.
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

// reducer - redukuje dwa argumenty do jednego, zwracanego obiektu.
//Przyjmuje aktualny stan aplikacji oraz akcję – a zwraca nowy stan 
//aplikacji, z uwzględnieniem akcji (lub bez jej uwzględnienia).
//Reducer jest funkcją, która reaguje na dispatchowaną akcję.
//Tutaj: kiedy Creator w List.js wywoła funkcję, otrzymaną w propsie action, spowoduje 
//to wysłanie akcji do magazynu, który uruchomi reducer – a właściwie, wszystkie reducery.
export default function reducer(state = [], action = {}) {
  switch (action.type) { //sprawdzamy typ akcji.
    case ADD_COLUMN: //Jeśli tu nie pasuje do żadnego wyrażenia...
      return [...state, action.payload];//A jak pasuje to zwraca tablicę
      //z rozpakowanym dotychczasowym stanem oraz dodaje nowy obiekt. 
      //W tym obiekcie rozpakowany zostanie payload akcji, oraz stworzone 
      //zostanie id kolumny za pomocą biblioteki shortid.
    default:
      return state; //...to zwróci ten argument.
  }
}
