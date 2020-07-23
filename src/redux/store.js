import {combineReducers, createStore} from 'redux';
import initialStoreData from '../data/dataStore';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

// define initial state and shallow-merge initial data
const initialState = {
  app: initialStoreData.app,
  lists: initialStoreData.lists,
  columns: initialStoreData.columns,
  cards: initialStoreData.cards,
  searchString: '',
};

// define reducers - wskazujemy magazynowi, skąd ma wziąć reducery tych właściwości stanu.
//Zaimportowaliśmy je z plików src/redux/...Reducer.js.
//Redux wspiera tylko jeden reducer, obsługujący cały magazyn. W praktyce, jednak, 
//bardzo często rozbija się go na mniejsze reducery
const reducers = {
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers. cząstkowe reducery są łączone w jeden za pomocą funkcji 
//combineReducers, zaimportowanej z pakietu redux. 
const storeReducer = combineReducers(reducers);

// create store - stworzenie magazynu za pomocą funkcji createStore, zaimportowanej z pakietu redux.
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
