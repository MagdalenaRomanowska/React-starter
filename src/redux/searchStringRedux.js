// selectors
export const getSearchString = ({searchString}) => searchString;
//zwraca wartość właściwości searchString, zapisanej bezpośrednio w stanie aplikacji. 
export const countAllCards = ({cards}) => cards.length;
export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
//filtrowanie kart za pomocą metody filter. Ta funkcja wyszukuje karty pasujące do 
//frazy searchString, a następnie je liczy. 

// action name creator
const reducerName = 'searchString'; //zapisujemy nazwę właściwości stanu, na której będziemy wykonywać akcje.
const createActionName = name => `app/${reducerName}/${name}`;

// actions types
export const CHANGE = createActionName('CHANGE');

// action creators
export const createAction_changeSearchString = payload => ({ payload, type: CHANGE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:// Jeśli reducer wykryje akcję zmiany wyszukiwanej frazy,
      return action.payload;//ma zwrócić payload tej akcji. 
    default:
      return statePart; //W tym przypadku, wspomnianym fragmentem stanu jest state.searchString, który jest ciągiem znaków. 
  }
}
