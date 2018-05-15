import {
  INCREMENT,
  DELETE_ARTICLE,
  FILTER_DATE_RANGE,
  FILTER_SELECTION
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