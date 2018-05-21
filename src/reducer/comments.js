import {CREATE_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS} from '../constants';
// import {normalizedComments as defaultComments} from '../fixtures';
import {OrderedMap, Record} from 'immutable';
import {arrToMap} from '../helpers';

// const mapComments = arrToMap(defaultComments);
const CommentRecord = Record({
  id: undefined,
  user: undefined,
  text: ''
});

const ReducerState = Record({
  entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
  const {type, payload} = action;

  switch(type) {
    case CREATE_COMMENT:
      const {randomId} = action;
      // const comment = {...payload.comment, id: randomId};
      // return {...commentsState, [randomId]: comment};
      return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));
    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      const {response} = payload;
      return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)));
  }

  return commentsState;
};