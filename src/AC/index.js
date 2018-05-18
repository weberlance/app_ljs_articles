import { INCREMENT, DELETE_ARTICLE, FILTER_DATE_RANGE, FILTER_SELECTION, CREATE_COMMENT, GET_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS, FAIL} from '../constants';

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


export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id } 
    });

    setTimeout(() => {
      fetch(`/api/article/${id}`)
      .then(res => res.json())
      .then(response => {
        dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: { id, response }
          
        });
      })
      .catch(error => {
        dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: { id, error }
        });
      })
    }, 1000);
  };
}

// export function loadArticle(id) {
//   return ({
//     type: LOAD_ARTICLE,
//     callAPI: `api/article/${id}`
//   });
// }