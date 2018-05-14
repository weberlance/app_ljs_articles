
import uuid from 'uuid/v1';

export default store => next => action => {
  console.log('dispatching ', action);
  const id = uuid();
  console.log(id);
  next(action);
}