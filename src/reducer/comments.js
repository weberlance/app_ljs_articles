import {CREATE_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_PAGE_COMMENTS, START, SUCCESS} from '../constants';
// import {normalizedComments as defaultComments} from '../fixtures';
import {Map, OrderedMap, Record} from 'immutable';
import {arrToMap} from '../helpers';

// const mapComments = arrToMap(defaultComments);
const CommentRecord = Record({
  id: undefined,
  user: undefined,
  text: ''
});

const ReducerState = Record({
  entities: new OrderedMap({}),
  total: null,
  pagination: new Map({})
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
  const {type, payload, response, randomId} = action;

  switch(type) {

    case CREATE_COMMENT:
      // randomId
      // const comment = {...payload.comment, id: randomId};
      // return {...commentsState, [randomId]: comment};
      return commentsState.setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}));

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      // payload.response
      return commentsState.update('entities', entities => entities.merge(arrToMap(payload.response, CommentRecord)));

    case LOAD_PAGE_COMMENTS + START:
      return commentsState.setIn(['pagination', payload.page, 'loading'], true);

    case LOAD_PAGE_COMMENTS + SUCCESS:
      // response
      return commentsState
        .setIn(['total'], response.total)
        .setIn(['pagination', payload.page, 'ids'], response.records.map(comment => comment.id))
        .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
        .setIn(['pagination', payload.page, 'loading'], false);
  }

  return commentsState;
};