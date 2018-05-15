import {DELETE_ARTICLE, CREATE_COMMENT} from '../constants';
import {normalizedArticles as defaultArticles} from '../fixtures';
import {arrToMap} from '../helpers';

const mapArticles = arrToMap(defaultArticles);

export default (articleState = mapArticles, action) => {
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
  }

  return articleState;
};