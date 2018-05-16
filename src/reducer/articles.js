import {DELETE_ARTICLE, CREATE_COMMENT, GET_ALL_ARTICLES} from '../constants';
// import {normalizedArticles as defaultArticles} from '../fixtures';
import {arrToMap} from '../helpers';

// const mapArticles = arrToMap(defaultArticles);

export default (articleState = {}, action) => {
  const {type, payload} = action;

  switch(type) {
    case DELETE_ARTICLE:
      const newArticleState = {...articleState};
      delete newArticleState[payload.id];
      return newArticleState;

    case CREATE_COMMENT:
      const {randomId} = action;
      const article = articleState[payload.articleId];
      const newCommentsList = (article.comments || []).concat(randomId);

      return {
        ...articleState,
        [payload.articleId]: {...article, comments: newCommentsList}
      };

    case GET_ALL_ARTICLES:
      const {response} = action;
      return arrToMap(response);
  }

  return articleState;
};