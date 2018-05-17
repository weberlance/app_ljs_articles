import {DELETE_ARTICLE, CREATE_COMMENT, GET_ALL_ARTICLES} from '../constants';
import {Map, Record} from 'immutable';
import {arrToMap} from '../helpers';

const mapArticles = new Map({});

const ArticleRecord = Record({
  text: undefined,
  title: '',
  id: undefined,
  comments: []
});

export default (articleState = mapArticles, action) => {
  const {type, payload} = action;

  switch(type) {
    case DELETE_ARTICLE:
      return articleState.delete(payload.id);

      // const newArticleState = {...articleState};
      // delete newArticleState[payload.id];
      // return newArticleState;

    case CREATE_COMMENT:
      const {randomId} = action;
      return articleState.updateIn([payload.articleId, 'comments'], comments => comments.concat(randomId));

      // const article = articleState[payload.articleId];
      // const newCommentsList = (article.comments || []).concat(randomId);

      // return {
      //   ...articleState,
      //   [payload.articleId]: {...article, comments: newCommentsList}
      // };

    case GET_ALL_ARTICLES:
      const {response} = action;
      return arrToMap(response, ArticleRecord);
  }

  return articleState;
};