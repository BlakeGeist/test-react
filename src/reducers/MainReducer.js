import immutable from 'immutable';
import Constants from '../constants';

const { Map, List } = immutable;

const initialData = new Map({ users: new List() });

export default (state = initialData, action) => {
  switch (action.type) {
    case Constants.FETCHED_USER:
    {
      return state.set('users', new List(action.data));
    }
    default:
    {
      return state;
    }
  }
};
