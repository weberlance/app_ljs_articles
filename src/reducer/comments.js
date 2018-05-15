import {CREATE_COMMENT} from '../constants';
import {normalizedComments as defaultComments} from '../fixtures';
import {arrToMap} from '../helpers';

const mapComments = arrToMap(defaultComments);

export default (commentsState = mapComments, action) => {
  const {type, payload} = action;

  switch(type) {
    case CREATE_COMMENT:
      const {randomId} = action;
      const comment = {...payload.comment, id: randomId};
      return {...commentsState, [randomId]: comment};
  }

  return commentsState;
};