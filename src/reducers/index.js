import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import MainReducer from '../reducers/MainReducer';

export default combineReducers({
  MainReducer,
  form: formReducer,
});
