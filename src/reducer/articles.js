import {DELETE_ARTICLE} from '../constants';
import {normalizedArticles as defaultArticles} from '../fixtures';
import {arrToMap} from '../helpers';

const mapArticles = arrToMap(defaultArticles);

export default (articleState = mapArticles, action) => {
  const {type, payload} = action;

  switch(type) {
    case DELETE_ARTICLE:
      // return articleState.filter(article => article.id !== payload.id);
      const newArticleState = {...articleState};
      delete newArticleState[payload.id];
      return newArticleState;
  }

  return articleState;
};