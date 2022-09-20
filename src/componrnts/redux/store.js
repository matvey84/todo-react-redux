import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from "redux";
import { addTodoReduser} from './redusers/addTodoReduser';
import {workWithButtonTodo} from './redusers/workWithButtonTodo'
import {alertReduser} from './redusers/alertReduser'
import { progressReduser } from './redusers/progressReduser';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const allRedusers = combineReducers({
	
	addTodoReduser,
	workWithButtonTodo,
	progressReduser,
	alertReduser

})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, allRedusers)

export const store = createStore(persistedReducer/*allRedusers*/, composeWithDevTools())
export const persistor = persistStore(store)