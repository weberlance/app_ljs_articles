
import uuid from 'uuid/v1';

export default store => next => action => {
  console.log('dispatching ', action);
  next(action);
}