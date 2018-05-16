import {
  INCREMENT,
  DELETE_ARTICLE,
  FILTER_DATE_RANGE,
  FILTER_SELECTION,
  CREATE_COMMENT,
  GET_ALL_ARTICLES
} from '../constants';

export function increment() {
  return ({
    type: INCREMENT
  });
}

export function deleteArticle (id) {
  return ({
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  });  
}

export function filterDateRangeUpdate (dateRange) {
  return ({
    type: FILTER_DATE_RANGE,
    payload: { dateRange }
  });  
}

export function filterSelectUpdate (selection) {
  return ({
    type: FILTER_SELECTION,
    payload: { selection }
  });  
}

export function createComment(comment, articleId) {
  return ({
    type: CREATE_COMMENT,
    payload: {comment, articleId},
    generateId: true // to get randomId from middleware idGen
  });
}

export function getAllArticles () {
  return ({
    type: GET_ALL_ARTICLES,
    callAPI: 'api/article'
  });
}