import { INCREMENT, DELETE_ARTICLE, FILTER_DATE_RANGE, FILTER_SELECTION, CREATE_COMMENT, GET_ALL_ARTICLES, LOAD_ARTICLE, LOAD_ARTICLE_COMMENTS, LOAD_PAGE_COMMENTS, START, SUCCESS, FAIL} from '../constants';

export function increment() {
  return ({
    type: INCREMENT
  });
};

export function deleteArticle (id) {
  return ({
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  });  
};

export function filterDateRangeUpdate (dateRange) {
  return ({
    type: FILTER_DATE_RANGE,
    payload: { dateRange }
  });  
};

export function filterSelectUpdate (selection) {
  return ({
    type: FILTER_SELECTION,
    payload: { selection }
  });  
};

export function createComment(comment, articleId) {
  return ({
    type: CREATE_COMMENT,
    payload: {comment, articleId},
    generateId: true // to get randomId from middleware idGen
  });
};

export function getAllArticles () {
  return ({
    type: GET_ALL_ARTICLES,
    callAPI: 'api/article'
  });
};


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
};

// export function loadArticle(id) {
//   return ({
//     type: LOAD_ARTICLE,
//     callAPI: `api/article/${id}`
//   });
// }


export function loadArticleComments(articleId) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE_COMMENTS + START,
      payload: {articleId}
    });

    setTimeout(() => {
      fetch(`/api/comment?article=${articleId}`)
        .then(res => res.json())
        .then(response => {
          dispatch({
            type: LOAD_ARTICLE_COMMENTS + SUCCESS,
            payload: {articleId, response}
          });
        })
        .catch(error => {
          debugger;
          dispatch({
            type: LOAD_ARTICLE_COMMENTS + FAIL,
            payload: { articleId, error }
          });
        });
    }, 1000);
  };
};

export function loadCommentsForPage(page) {
  return (dispatch, getState) => {

    const {comments: {pagination}} = getState()
    if (pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return;

    const limitPerPage = 5;
    dispatch({
      type: LOAD_PAGE_COMMENTS + START,
      payload: {page}
    });

    fetch(`/api/comment?limit=${limitPerPage}&offset=${(page - 1) * limitPerPage}`)
      .then(res => res.json())
      .then(response => {
        dispatch({
          type: LOAD_PAGE_COMMENTS + SUCCESS,
          payload: {page},
          response
        });
      })
      .catch(error => {
        dispatch({
          type: LOAD_PAGE_COMMENTS + FAIL,
          payload: { page, error }
        });
      });
  };
};