import {DELETE_ARTICLE, CREATE_COMMENT, GET_ALL_ARTICLES, START, SUCCESS, LOAD_ARTICLE} from '../constants';
import {Map, OrderedMap, Record} from 'immutable';
import {arrToMap} from '../helpers';

const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
});

const defaultState = new ReducerState();

const ArticleRecord = Record({
  text: undefined,
  title: '',
  id: undefined,
  loading: false,
  comments: []
});

export default (articleState = defaultState, action) => {
  const {type, payload} = action;

  switch(type) {
    case DELETE_ARTICLE:
      return articleState.deleteIn(['entities', payload.id]);

    case CREATE_COMMENT:
      const {randomId} = action;
      return articleState.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId));

    case GET_ALL_ARTICLES + START:
      return articleState.set('loading', true);

    case GET_ALL_ARTICLES + SUCCESS:
      const {response} = action;
      return articleState
          .set('entities', arrToMap(response, ArticleRecord))
          .set('loading', false)
          .set('loaded', true);

    case LOAD_ARTICLE + START:
      return articleState
        .setIn(['entities', payload.id, 'loading'], true)

    case LOAD_ARTICLE + SUCCESS:
      return articleState
        .setIn(['entities', payload.id], new ArticleRecord( payload.response ))
  }

  return articleState;
};