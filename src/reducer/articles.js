import {DELETE_ARTICLE, CREATE_COMMENT, GET_ALL_ARTICLES, START, SUCCESS, LOAD_ARTICLE, LOAD_ARTICLE_COMMENTS} from '../constants';
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
  comments: [],
  commentsLoading: false,
  commentsLoaded: false
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
      const {response} = action; // response in action is for example only
      return articleState
        .update('entities', entities => arrToMap(response, ArticleRecord).merge(entities))
        .set('loading', false)
        .set('loaded', true);

    case LOAD_ARTICLE + START:
      return articleState
        .setIn(['entities', payload.id], new ArticleRecord({loading: true, id: payload.id}));

    case LOAD_ARTICLE + SUCCESS: // response in payload
      return articleState
        .setIn(['entities', payload.id], new ArticleRecord( payload.response ));

    case LOAD_ARTICLE_COMMENTS + START:
      return articleState.setIn(['entities', payload.articleId, 'commentsLoading'], true);

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return articleState
        .setIn(['entities', payload.articleId, 'commentsLoading'], false)
        .setIn(['entities', payload.articleId, 'commentsLoaded'], true);
  }

  return articleState;
};